---
title: How to Setup a Spring Boot in EC2 Instance Using AWS CLI
slug: how-to-setup-a-spring-boot-in-ec2-instance-using-aws-cli
tags: ['AWS', 'AWS CLI', 'VPC', 'EC2']
categories: ['AWS']
date: 2022-11-19T14:09:00.000Z
image: /assets/img/blog/0029-how-to-setup-a-spring-boot-in-ec2-instance-using-aws-cli/how-to-setup-a-spring-boot-in-ec2-instance-using-aws-cli.png
author: MKAbuMattar
description: 'In this post, I will show you how to setup a Spring Boot in EC2 Instance Using AWS CLI'
prev: what-is-devops
next: undefined
featured: true
draft: false
---

## Introduction

In this post, I will show you how to setup a Spring Boot in EC2 Instance Using AWS CLI.

## Prerequisites

- AWS CLI installed and configured
- IAM user with the following permissions:
  - AmazonVPCFullAccess
  - AmazonEC2FullAccess
  - AmazonSNSTopicFullAccess
  - AmazonSNSFullAccess
  - AmazonCloudWatchFullAccess

## Create a Simple Spring Boot Application

### Step 1: Create a Spring Boot Application Using Spring Initializr

- Go to [Spring Initializr](https://start.spring.io/)
  - Project Maven
  - Language Java
  - Spring Boot 2.7.5
- Project Metadata
  - Group: io.github.mkabumattar
  - Artifact: spring-boot-aws-cli
  - Name: spring-boot-aws-cli
  - Description: Spring Boot AWS CLI
  - Package Name: io.github.mkabumattar.springbootawscli
  - Packaging: Jar
  - Java: 11
- Project Dependencies
  - Spring Web
  - Spring Boot DevTools
- Generate the project and unzip the zip file

---

- You can also use the following command to generate the project:

```bash
curl https://start.spring.io/starter.zip -d dependencies=web,devtools -d language=java -d javaVersion=11 -d type=maven-project -d baseDir=spring-boot-aws-cli -d packageName=io.github.mkabumattar.springbootawscli -d groupId=io.github.mkabumattar -d artifactId=spring-boot-aws-cli -d name=spring-boot-aws-cli -d description="Spring Boot AWS CLI" -d packaging=jar -o spring-boot-aws-cli.zip
```

Extract the zip file:

```bash
unzip spring-boot-aws-cli.zip
```

### Step 2: Create a Controller

- Open the project in your favorite IDE
- Add Controller
  - Create a new package called `controller`
  - Create a new class called `HelloController`
  - Add the following code:

```java
package io.github.mkabumattar.springbootawscli.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public ResponseEntity<Object> hello() {
        var response = new Object() {
            public final String message = "Hello World!";
        };

        return ResponseEntity.ok(response);
    }
}
```

- Add the following code to `application.properties`:

```properties
server.port=8080
```

Explanation:

- `@RestController` is a convenience annotation that does nothing more than adding the `@Controller` and `@ResponseBody` annotations together.
- `@GetMapping` is a composed annotation that acts as a shortcut for `@RequestMapping(method = RequestMethod.GET)`.
- `ResponseEntity` is a container object that is used to return a response with HTTP headers and status code.
- `ResponseEntity.ok()` is a static method that returns a builder that allows us to add headers and build the response entity with an OK status.

### Step 3: Run the Spring Boot Application

- Run the application using the following command:

```bash
mvn spring-boot:run
```

- Open the browser and go to `http://localhost:8080/`
- You should see the following message:

```json
{
  "message": "Hello World!"
}
```

### Step 3: Push the Spring Boot Application to GitHub

- Create a new repository on GitHub
- Push the project to GitHub

> **Note**: You can find the source code of the project [here](https://github.com/MKAbuMattar/spring-boot-aws-cli)

> **Note**: in bigger projects and complex application, you will get a jar file instead of the source code. in private projects, you can use [GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry) to store your jar files.

## Create an VPC

### Step 1: Create VPC

To create a VPC, run the following command:

```bash
# Create a VPC
AWS_VPC=$(aws ec2 create-vpc \
  --cidr-block 10.0.0.0/16 \
  --query 'Vpc.VpcId' \
  --output text)

# Add a name tag to the VPC
aws ec2 create-tags \
  --resources $AWS_VPC \
  --tags Key=Name,Value=aws-vpc
```

Explanation:

- `aws ec2 create-vpc` - Create a VPC
- `--cidr-block` - The IPv4 network range for the VPC, in CIDR notation.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `--resources` - The IDs of the resources.
- `--tags` - The tags to apply to the resource.

### Step 2: Modify your custom VPC and enable DNS hostname support, and DNS support

To modify your custom VPC and enable DNS hostname support, and DNS support, run the following command:

```bash
# Enable DNS hostnames
aws ec2 modify-vpc-attribute \
  --vpc-id $AWS_VPC \
  --enable-dns-hostnames "{\"Value\":true}"

# Enable DNS support
aws ec2 modify-vpc-attribute \
  --vpc-id $AWS_VPC \
  --enable-dns-support "{\"Value\":true}"
```

Explanation:

- `aws ec2 modify-vpc-attribute` - Modifies the specified attribute of the specified VPC.
- `--vpc-id` - The ID of the VPC.
- `--enable-dns-hostnames` - Indicates whether the instances launched in the VPC get DNS hostnames.
- `--enable-dns-support` - Indicates whether DNS resolution is supported for the VPC.

### Step 3: Create a Two Public Subnets

To create a public subnet, run the following command:

```bash
# get the availability zone
AWS_AVAILABILITY_ZONE=$(aws ec2 describe-availability-zones \
--query 'AvailabilityZones[*].[ZoneName]' \
--output text)

# get the first availability zone
AWS_AVAILABILITY_ZONE_1=$(echo $AWS_AVAILABILITY_ZONE | cut -d ' ' -f 1)

# get the second availability zone
AWS_AVAILABILITY_ZONE_2=$(echo $AWS_AVAILABILITY_ZONE | cut -d ' ' -f 2)

# Create a public subnet
AWS_PUBLIC_SUBNET_1=$(aws ec2 create-subnet \
  --vpc-id $AWS_VPC \
  --availability-zone $AWS_AVAILABILITY_ZONE_1 \
  --cidr-block 10.0.1.0/24 \
  --query 'Subnet.SubnetId' \
  --output text)

AWS_PUBLIC_SUBNET_2=$(aws ec2 create-subnet \
  --vpc-id $AWS_VPC \
  --availability-zone $AWS_AVAILABILITY_ZONE_2 \
  --cidr-block 10.0.2.0/24 \
  --query 'Subnet.SubnetId' \
  --output text)

# Add a name tag to the public subnet
aws ec2 create-tags \
  --resources $AWS_PUBLIC_SUBNET_1 \
  --tags Key=Name,Value=aws-public-subnet-1

aws ec2 create-tags \
  --resources $AWS_PUBLIC_SUBNET_2 \
  --tags Key=Name,Value=aws-public-subnet-2
```

Explanation:

- `aws ec2 create-subnet` - Creates a subnet in an existing VPC.
- `--vpc-id` - The ID of the VPC.
- `--cidr-block` - The IPv4 network range for the subnet, in CIDR notation.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `--resources` - The IDs of the resources.
- `--tags` - The tags to apply to the resource.

### Step 4: Enable Auto-assign Public IP on the subnet

To enable auto-assign public IP on the subnet, run the following command:

```bash
# Enable auto-assign public IP on the subnet
aws ec2 modify-subnet-attribute \
  --subnet-id $AWS_PUBLIC_SUBNET_1 \
  --map-public-ip-on-launch

aws ec2 modify-subnet-attribute \
  --subnet-id $AWS_PUBLIC_SUBNET_2 \
  --map-public-ip-on-launch
```

Explanation:

- `aws ec2 modify-subnet-attribute` - Modifies a subnet attribute.
- `--subnet-id` - The ID of the subnet.
- `--map-public-ip-on-launch` - Specify true to indicate that network interfaces created in the specified subnet should be assigned a public IPv4 address.

### Step 5: Create an Internet Gateway

To create an Internet Gateway, run the following command:

```bash
# Create an Internet Gateway
AWS_INTERNET_GATEWAY=$(aws ec2 create-internet-gateway \
  --query 'InternetGateway.InternetGatewayId' \
  --output text)

# Add a name tag to the Internet Gateway
aws ec2 create-tags \
  --resources $AWS_INTERNET_GATEWAY \
  --tags Key=Name,Value=aws-internet-gateway
```

Explanation:

- `aws ec2 create-internet-gateway` - Creates an Internet gateway for use with a VPC.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `--resources` - The IDs of the resources.
- `--tags` - The tags to apply to the resource.

### Step 6: Attach the Internet Gateway to the VPC

To attach the Internet Gateway to the VPC, run the following command:

```bash
# Attach the Internet Gateway to the VPC
aws ec2 attach-internet-gateway \
  --internet-gateway-id $AWS_INTERNET_GATEWAY \
  --vpc-id $AWS_VPC
```

Explanation:

- `aws ec2 attach-internet-gateway` - Attaches an Internet gateway to a VPC, enabling connectivity between the Internet and the VPC.
- `--internet-gateway-id` - The ID of the Internet gateway.
- `--vpc-id` - The ID of the VPC.

### Step 7: Create a Route Table

To create a route table, run the following command:

```bash
# Create a route table
AWS_ROUTE_TABLE=$(aws ec2 create-route-table \
  --vpc-id $AWS_VPC \
  --query 'RouteTable.RouteTableId' \
  --output text)

# Add a name tag to the route table
aws ec2 create-tags \
  --resources $AWS_ROUTE_TABLE \
  --tags Key=Name,Value=aws-route-table
```

Explanation:

- `aws ec2 create-route-table` - Creates a route table for the specified VPC.
- `--vpc-id` - The ID of the VPC.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `--resources` - The IDs of the resources.
- `--tags` - The tags to apply to the resource.

### Step 8: Create a custom route table association

To create a custom route table association, run the following command:

```bash
# Create a custom route table association
aws ec2 associate-route-table \
  --subnet-id $AWS_PUBLIC_SUBNET_1 \
  --route-table-id $AWS_ROUTE_TABLE

aws ec2 associate-route-table \
  --subnet-id $AWS_PUBLIC_SUBNET_2 \
  --route-table-id $AWS_ROUTE_TABLE
```

Explanation:

- `aws ec2 associate-route-table` - Associates a subnet with a route table.
- `--subnet-id` - The ID of the subnet.
- `--route-table-id` - The ID of the route table.

### Step 9: Associate the subnet with route table, making it a public subnet

To associate the subnet with route table, making it a public subnet, run the following command:

```bash
# Associate the subnet with route table, making it a public subnet
aws ec2 create-route \
  --route-table-id $AWS_ROUTE_TABLE \
  --destination-cidr-block 0.0.0.0/0 \
  --gateway-id $AWS_INTERNET_GATEWAY
```

Explanation:

- `aws ec2 create-route` - Creates a route in a route table within a VPC.
- `--route-table-id` - The ID of the route table for the route.
- `--destination-cidr-block` - The IPv4 CIDR address block used for the destination match.
- `--gateway-id` - The ID of an Internet gateway or virtual private gateway attached to your VPC.

### Step 10: Create a Security Group

To create a security group, run the following command:

```bash
# Create a security group
AWS_SECURITY_GROUP=$(aws ec2 create-security-group \
  --group-name aws-security-group \
  --description "AWS Security Group" \
  --vpc-id $AWS_VPC \
  --query 'GroupId' \
  --output text)

# Add a name tag to the security group
aws ec2 create-tags \
  --resources $AWS_SECURITY_GROUP \
  --tags Key=Name,Value=aws-security-group
```

Explanation:

- `aws ec2 create-security-group` - Creates a security group.
- `--group-name` - The name of the security group.
- `--description` - A description for the security group.
- `--vpc-id` - The ID of the VPC.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `--resources` - The IDs of the resources.
- `--tags` - The tags to apply to the resource.

### Step 11: Add a rule to the security group

To add a rule to the security group, run the following command:

```bash
# Add a rule to the security group

# Add SSH rule
aws ec2 authorize-security-group-ingress \
--group-id $AWS_SECURITY_GROUP \
--protocol tcp \
--port 22 \
--cidr 0.0.0.0/0 \
--output text

# Add HTTP rule
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_SECURITY_GROUP \
  --protocol tcp \
  --port 80 \
  --cidr 0.0.0.0/0 \
  --output text

# Add HTTPS rule
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_SECURITY_GROUP \
  --protocol tcp \
  --port 443 \
  --cidr 0.0.0.0/0 \
  --output text

# Add an inbound rule
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_SECURITY_GROUP \
  --protocol tcp \
  --port 8080 \
  --cidr 0.0.0.0/0 \
  --output text
```

Explanation:

- `aws ec2 authorize-security-group-ingress` - Adds one or more ingress rules to a security group.
- `--group-id` - The ID of the security group.
- `--protocol` - The IP protocol name or number.
- `--port` - The port number.
- `--cidr` - The IPv4 CIDR range.
- `--output` - The output format of the command.

## Create a EC2 Instance

### Step 1: Get the latest AMI ID

To get the latest AMI ID, run the following command:

```bash
# Get the latest AMI ID
AWS_AMI=$(aws ec2 describe-images \
--owners 'amazon' \
--filters 'Name=name,Values=amzn2-ami-kernel-5.10-hvm-2.0.20221103.3-x86_64-gp2' \
'Name=state,Values=available' \
--query 'sort_by(Images, &CreationDate)[-1].[ImageId]' \
--output 'text')
```

Explanation:

- `aws ec2 describe-images` - Describes one or more of the images (AMIs, AKIs, and ARIs) available to you. Images available to you include public images, private images that you own, and private images owned by other AWS accounts but for which you have explicit launch permissions.
- `--owners` - Filters the images by the owner. Specify an AWS account ID, `self` (owner is the sender of the request), or an AWS owner alias (valid values are `amazon`, `aws-marketplace`, `microsoft`).
- `--filters` - The filters.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.

### Step 2: Create a key pair

To create a key pair, run the following command:

```bash
# Create a key pair
aws ec2 create-key-pair \
--key-name aws-key-pair \
--query 'KeyMaterial' \
--output text > aws-key-pair.pem

# Change the permission of the key pair
chmod 400 aws-key-pair.pem
```

Explanation:

- `aws ec2 create-key-pair` - Creates a 2048-bit RSA key pair with the specified name. The private key is returned as an unencrypted PEM encoded PKCS#1 private key. The public key is stored and returned as a PEM encoded X.509 public key.
- `--key-name` - The name for the key pair.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.

### Step 3: Create a User Data Script

To create a User Data Script, run the following command:

```bash
# Create a User Data Script
cat > user-data.sh <<EOF
#!/bin/bash

# update the system
sudo yum update -y

# enable java-openjdk11
sudo amazon-linux-extras enable java-openjdk11 -y

# clean yum cache
sudo yum clean metadata

# install java-openjdk11
sudo yum install java-11-openjdk -y

# configure java 11
sudo alternatives --config java <<< 1

# install git
sudo yum install git -y

# clone the project
git clone https://github.com/MKAbuMattar/spring-boot-aws-cli.git

# build the project
cd spring-boot-aws-cli

# run the project
nohup java -jar target/spring-boot-aws-cli-0.0.1-SNAPSHOT.jar > out.log &

EOF
```

Explanation:

- `cat > user-data.sh <<EOF` - Creates a file named `user-data.sh` and writes the following lines to it.
- `#!/bin/bash` - The shebang line.
- `sudo yum update -y` - Updates the system.
- `sudo amazon-linux-extras enable java-openjdk11 -y` - Enables the `java-openjdk11` package.
- `sudo yum clean metadata` - Cleans the yum cache.
- `sudo yum install java-11-openjdk -y` - Installs the `java-11-openjdk` package.
- `sudo alternatives --config java <<< 1` - Configures the `java` package.
- `sudo yum install git -y` - Installs the `git` package.
- `git clone https://www.github.com/MKAbuMattar/spring-boot-aws-demo.git` - Clones the project.
- `cd spring-boot-aws-demo` - Changes the directory to the project.
- `nohup java -jar target/spring-boot-aws-demo-0.0.1-SNAPSHOT.jar > out.log &` - Runs the project in the background.

### Step 4: Create an EC2 Instance

To create an EC2 Instance, run the following command:

```bash
# Create an EC2 Instance
AWS_INSTANCE=$(aws ec2 run-instances \
--image-id $AWS_AMI \
--instance-type t2.micro \
--key-name aws-key-pair \
--monitoring "Enabled=false" \
--security-group-ids $AWS_SECURITY_GROUP \
--subnet-id $AWS_PUBLIC_SUBNET_1 \
--user-data file://user-data.sh \
--query 'Instances[0].InstanceId' \
--output text)

# Add a name tag to the EC2 instance
aws ec2 create-tags \
  --resources $AWS_INSTANCE \
  --tags Key=Name,Value=aws-instance
```

Explanation:

- `aws ec2 run-instances` - Launches the specified number of instances using an AMI for which you have permissions.
- `--image-id` - The ID of the AMI.
- `--count` - The number of instances.
- `--instance-type` - The instance type.
- `--key-name` - The name of the key pair.
- `--security-group-ids` - The IDs of the security groups.
- `--user-data` - The user data to make available to the instance.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `aws ec2 create-tags` - Adds or overwrites one or more tags for the specified resources or resource types. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource.
- `--resources` - The IDs of the resources.
- `--tags` - The tags. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource.

### Step 5: Create an Elastic IP

To create an Elastic IP, run the following command:

```bash
# Create an Elastic IP
AWS_ELASTIC_IP=$(aws ec2 allocate-address \
  --domain vpc \
  --query 'AllocationId' \
  --output text)

# Associate the Elastic IP with the EC2 instance
aws ec2 associate-address \
  --instance-id $AWS_INSTANCE \
  --allocation-id $AWS_ELASTIC_IP
```

Explanation:

- `aws ec2 allocate-address` - Allocates an Elastic IP address to your AWS account.
- `--domain` - Indicates whether the address is for use in EC2-Classic (`standard`) or in a VPC (`vpc`).
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `aws ec2 associate-address` - Associates an Elastic IP address with an instance or a network interface.
- `--instance-id` - The ID of the instance.
- `--allocation-id` - The allocation ID.

### Step 6: Create a CloudWatch Alarm

To create a CloudWatch Alarm, run the following command:

```bash
# Create a SNS topic
AWS_SNS_TOPIC=$(aws sns create-topic \
  --name aws-sns-topic \
  --query 'TopicArn' \
  --output text)

# add a your email to the SNS topic
EMAIL_ADDRESS=("YOUR_EMAIL_ADDRESS")

aws sns subscribe \
  --topic-arn $AWS_SNS_TOPIC \
  --protocol email \
  --notification-endpoint $EMAIL_ADDRESS

# Create a CloudWatch Alarm
aws cloudwatch put-metric-alarm \
  --alarm-name aws-cloudwatch-alarm \
  --alarm-description "Alarm when CPU exceeds 70%" \
  --metric-name CPUUtilization \
  --namespace AWS/EC2 \
  --statistic Average \
  --period 60 \
  --threshold 70 \
  --comparison-operator GreaterThanOrEqualToThreshold \
  --dimensions Name=InstanceId,Value=$AWS_INSTANCE \
  --evaluation-periods 1 \
  --alarm-actions $AWS_SNS_TOPIC
```

Explanation:

- `aws sns create-topic` - Creates a topic to which notifications can be published.
- `--name` - The display name for the topic.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `aws sns subscribe` - Prepares to subscribe an endpoint by sending the endpoint a confirmation message.
- `--topic-arn` - The ARN of the topic you want to subscribe to.
- `--protocol` - The protocol you want to use. Supported protocols include: `http`, `https`, `email`, `email-json`, `sms`, `sqs`, `application`, `lambda`.
- `--notification-endpoint` - The endpoint that you want to receive notifications. Endpoints vary by protocol:
  - For the `http` protocol, the endpoint is an URL beginning with "http://".
  - For the `https` protocol, the endpoint is a URL beginning with "https://".
  - For the `email` protocol, the endpoint is an email address.
  - For the `email-json` protocol, the endpoint is an email address.
  - For the `sms` protocol, the endpoint is a phone number of an SMS-enabled device.
  - For the `sqs` protocol, the endpoint is the ARN of an Amazon SQS queue.
  - For the `application` protocol, the endpoint is the EndpointArn of a mobile app and device.
  - For the `lambda` protocol, the endpoint is the ARN of an AWS Lambda function.
- `aws cloudwatch put-metric-alarm` - Creates or updates an alarm and associates it with the specified metric, metric math expression, or anomaly detection model.
- `--alarm-name` - The descriptive name for the alarm. This name must be unique within the AWS account.
- `--alarm-description` - The description for the alarm.
- `--metric-name` - The name for the metric associated with the alarm.
- `--namespace` - The namespace for the metric associated with the alarm.
- `--statistic` - The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use `ExtendedStatistic`.
- `--period` - The period, in seconds, over which the statistic is applied.
- `--threshold` - The value against which the specified statistic is compared.
- `--comparison-operator` - The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.
- `--dimensions` - The dimensions for the metric associated with the alarm.
- `--evaluation-periods` - The number of periods over which data is compared to the specified threshold.
- `--alarm-actions` - The actions to execute when this alarm transitions to the `ALARM` state from any other state. Each action is specified as an Amazon Resource Name (ARN).

### Step 7: Create a CloudWatch Event

To create a CloudWatch Event, run the following command:

```bash
# Create a CloudWatch Event
aws events put-rule \
  --name aws-cloudwatch-event \
  --schedule-expression "rate(1 minute)"

aws events put-targets \
  --rule aws-cloudwatch-event \
  --targets "Id"="1","Arn"="$AWS_SNS_TOPIC"
```

Explanation:

- `aws events put-rule` - Creates or updates a rule. Rules are enabled by default, or based on value of the state. You can disable a rule using `DisableRule`.
- `--name` - The name of the rule that you are creating or updating.
- `--schedule-expression` - The scheduling expression. For example, `"cron(0 20 * * ? *)"` or `"rate(5 minutes)"`.
- `aws events put-targets` - Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.
- `--rule` - The name of the rule.
- `--targets` - The targets to update or add to the rule.

### Step 8: Create a CloudWatch Log Group

To create a CloudWatch Log Group, run the following command:

```bash
# Create a CloudWatch Log Group
aws logs create-log-group \
  --log-group-name aws-cloudwatch-log-group
```

Explanation:

- `aws logs create-log-group` - Creates a log group with the specified name. You can create up to 20,000 log groups per account.
- `--log-group-name` - The name of the log group.

### Step 9: Create a CloudWatch Log Stream

To create a CloudWatch Log Stream, run the following command:

```bash
# Create a CloudWatch Log Stream
aws logs create-log-stream \
  --log-group-name aws-cloudwatch-log-group \
  --log-stream-name aws-cloudwatch-log-stream
```

Explanation:

- `aws logs create-log-stream` - Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored.
- `--log-group-name` - The name of the log group.
- `--log-stream-name` - The name of the log stream.

### Step 10: Create a Load Balancer

To create a Load Balancer, run the following command:

```bash
# Create a Load Balancer
AWS_LOAD_BALANCER=$(aws elbv2 create-load-balancer \
  --name aws-load-balancer \
  --subnets $AWS_PUBLIC_SUBNET_1 $AWS_PUBLIC_SUBNET_2 \
  --security-groups $AWS_SECURITY_GROUP \
  --query 'LoadBalancers[0].LoadBalancerArn' \
  --output text)

# Create a Load Balancer Target Group
AWS_TARGET_GROUP=$(aws elbv2 create-target-group \
  --name aws-target-group \
  --protocol HTTP \
  --port 80 \
  --vpc-id $AWS_VPC \
  --query 'TargetGroups[0].TargetGroupArn' \
  --output text)

# Create a Load Balancer Target Group Attachment
aws elbv2 register-targets \
  --target-group-arn $AWS_TARGET_GROUP \
  --targets Id=$AWS_INSTANCE

# Create a Load Balancer Listener
aws elbv2 create-listener \
  --load-balancer-arn $AWS_LOAD_BALANCER \
  --protocol HTTP \
  --port 80 \
  --default-actions Type=forward,TargetGroupArn=$AWS_TARGET_GROUP
```

Explanation:

- `aws elbv2 create-load-balancer` - Creates a load balancer.
- `--name` - The name of the load balancer.
- `--subnets` - The IDs of the subnets to attach to the load balancer. You can specify only one subnet per Availability Zone.
- `--security-groups` - The IDs of the security groups to assign to the load balancer.
- `aws elbv2 create-listener` - Creates a listener for the specified Application Load Balancer.
- `--load-balancer-arn` - The Amazon Resource Name (ARN) of the load balancer.
- `--protocol` - The protocol for connections from clients to the load balancer. Application Load Balancers support the HTTP and HTTPS protocols.
- `--port` - The port on which the load balancer is listening.
- `--default-actions` - The default actions for the listener.
- `aws elbv2 create-target-group` - Creates a target group.
- `--name` - The name of the target group.
- `--protocol` - The protocol to use for routing traffic to the targets.
- `--port` - The port on which the targets are listening.
- `--vpc-id` - The identifier of the virtual private cloud (VPC).
- `aws elbv2 register-targets` - Registers the specified targets with the specified target group.
- `--target-group-arn` - The Amazon Resource Name (ARN) of the target group.
- `--targets` - The targets. If you specified a port override when you registered a target, you must specify both the target ID and the port when you register it.

### Step 11: Get the Load Balancer DNS Name

To get the Load Balancer DNS Name, run the following command:

```bash
# Get the Load Balancer DNS Name
AWS_LOAD_BALANCER_DNS_NAME=$(aws elbv2 describe-load-balancers \
  --load-balancer-arns $AWS_LOAD_BALANCER \
  --query 'LoadBalancers[0].DNSName' \
  --output text)
```

Explanation:

- `aws elbv2 describe-load-balancers` - Describes the specified load balancers or all of your load balancers.
- `--load-balancer-arns` - The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.
- `--query` - The JMESPath query string.
- `--output` - The output format.

### Step 12: Create an EC2 Instance Image

To create an EC2 Instance Image, run the following command:

```bash
# Create an EC2 Instance Image
AWS_EC2_INSTANCE_IMAGE=$(aws ec2 create-image \
  --instance-id $AWS_INSTANCE \
  --name aws-ec2-instance-image \
  --description "AWS EC2 Instance Image" \
  --no-reboot \
  --query 'ImageId' \
  --output text)
```

Explanation:

- `aws ec2 create-image` - Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance that is either running or stopped.
- `--instance-id` - The ID of the instance.
- `--name` - The name of the new AMI in the destination region.
- `--description` - A description for the new AMI in the destination region.
- `--no-reboot` - By default, this parameter is set to false, which means Amazon EC2 attempts to shut down and reboot the instance before creating the image. If the 'No Reboot' option is set, Amazon EC2 doesn't shut down the instance before creating the image. When this option is used, file system integrity on the created image can't be guaranteed.
- `--query` - The JMESPath query string.
- `--output` - The output format.

### Step 13: Create an Launch Template

To create an Launch Template, run the following command:

```bash
# Create an Launch Template
AWS_LAUNCH_TEMPLATE=$(aws ec2 create-launch-template \
  --launch-template-name aws-launch-template \
  --version-description "AWS Launch Template" \
  --launch-template-data "{  \"NetworkInterfaces\": [{\"AssociatePublicIpAddress\": true,\"DeviceIndex\": 0,\"Ipv6AddressCount\": 1,\"SubnetId\": \"$AWS_PUBLIC_SUBNET_2\"    }  ],  \"ImageId\": \"$AWS_EC2_INSTANCE_IMAGE\",  \"KeyName\": \"aws-key-pair\",  \"SecurityGroupIds\": [\"$AWS_SECURITY_GROUP\"],  \"InstanceType\": \"t2.micro\",  \"TagSpecifications\": [    {\"ResourceType\": \"instance\",\"Tags\": [{ \"Key\": \"purpose\", \"Value\": \"webserver\" }]    }  ]}"\
  --query 'LaunchTemplate.LaunchTemplateId' \
  --output text)
```

Explanation:

- `aws ec2 create-launch-template` - Creates a launch template.
- `--launch-template-name` - The name of the launch template.
- `--version-description` - The description for the first version of the launch template.
- `--launch-template-data` - The information for the launch template.
- `--query` - The JMESPath query string.
- `--output` - The output format.

### Step 14: Create an Application Load Balancer

To create an Application Load Balancer, run the following command:

```bash
# Create an Application Load Balancer
AWS_APPLICATION_LOAD_BALANCER=$(aws elbv2 create-load-balancer \
  --name aws-application-load-balancer \
  --subnets $AWS_PUBLIC_SUBNET_1 $AWS_PUBLIC_SUBNET_2 \
  --security-groups $AWS_SECURITY_GROUP \
  --scheme internet-facing \
  --type application \
  --query 'LoadBalancers[0].LoadBalancerArn' \
  --output text)

# add tag to load balancer
aws elbv2 add-tags \
  --resource-arns $AWS_APPLICATION_LOAD_BALANCER \
  --tags Key=Name,Value=aws-application-load-balancer
```

Explanation:

- `aws elbv2 create-load-balancer` - Creates an Application Load Balancer or a Network Load Balancer.
- `--name` - The name of the load balancer.
- `--subnets` - The IDs of the subnets to attach to the load balancer. You can specify only one subnet per Availability Zone.
- `--security-groups` - The IDs of the security groups to assign to the load balancer.
- `--scheme` - The nodes of an Internet-facing load balancer have public IP addresses.
- `--type` - The type of load balancer.
- `--query` - The JMESPath query string.
- `--output` - The output format.

### Step 15: Create a Target Group

To create a Target Group, run the following command:

```bash
# Create a Target Group
AWS_TARGET_GROUP=$(aws elbv2 create-target-group \
  --name aws-target-group \
  --protocol HTTP \
  --port 80 \
  --vpc-id $AWS_VPC \
  --query 'TargetGroups[0].TargetGroupArn' \
  --output text)

# add tag to target group
aws elbv2 add-tags \
  --resource-arns $AWS_TARGET_GROUP \
  --tags Key=Name,Value=aws-target-group
```

Explanation:

- `aws elbv2 create-target-group` - Creates a target group.
- `--name` - The name of the target group.
- `--protocol` - The protocol to use for routing traffic to the targets.
- `--port` - The port on which the targets receive traffic.
- `--vpc-id` - The identifier of the virtual private cloud (VPC).
- `--query` - The JMESPath query string.
- `--output` - The output format.

### Step 16: Create a Listener

To create a Listener, run the following command:

```bash
# Create a Listener
AWS_LISTENER=$(aws elbv2 create-listener \
  --load-balancer-arn $AWS_APPLICATION_LOAD_BALANCER \
  --protocol HTTP \
  --port 80 \
  --default-actions Type=forward,TargetGroupArn=$AWS_TARGET_GROUP \
  --query 'Listeners[0].ListenerArn' \
  --output text)

# add tag to listener
aws elbv2 add-tags \
  --resource-arns $AWS_LISTENER \
  --tags Key=Name,Value=aws-listener
```

Explanation:

- `aws elbv2 create-listener` - Creates a listener for the specified Application Load Balancer.
- `--load-balancer-arn` - The Amazon Resource Name (ARN) of the load balancer.
- `--protocol` - The protocol for connections from clients to the load balancer.
- `--port` - The port on which the load balancer is listening.
- `--default-actions` - The actions for the default rule.
- `--query` - The JMESPath query string.
- `--output` - The output format.

### Step 17: Create an Auto Scaling Group

To create an Auto Scaling Group, run the following command:

```bash
# Create an Auto Scaling Group
AWS_AUTO_SCALING_GROUP=$(aws autoscaling create-auto-scaling-group \
  --auto-scaling-group-name aws-auto-scaling-group \
  --launch-template LaunchTemplateId=$AWS_LAUNCH_TEMPLATE,Version=1 \
  --min-size 1 \
  --max-size 2 \
  --desired-capacity 1 \
  --vpc-zone-identifier $AWS_PUBLIC_SUBNET_1 $AWS_PUBLIC_SUBNET_2 \
  --target-group-arns $AWS_TARGET_GROUP \
  --health-check-type ELB \
  --health-check-grace-period 300 \
  --query 'AutoScalingGroupARN' \
  --output text)

# add tag to auto scaling group
aws autoscaling create-or-update-tags \
  --tags Key=Name,Value=aws-auto-scaling-group,ResourceId=$AWS_AUTO_SCALING_GROUP,ResourceType=auto-scaling-group,PropagateAtLaunch=true
```

Explanation:

- `aws autoscaling create-auto-scaling-group` - Creates an Auto Scaling group with the specified name and attributes.
- `--auto-scaling-group-name` - The name of the Auto Scaling group.
- `--launch-template` - The launch template and version to use to launch instances.
- `--min-size` - The minimum size of the Auto Scaling group.
- `--max-size` - The maximum size of the Auto Scaling group.
- `--desired-capacity` - The number of EC2 instances that should be running in the Auto Scaling group.
- `--vpc-zone-identifier` - One or more subnet IDs, if applicable, separated by commas.
- `--target-group-arns` - The Amazon Resource Names (ARN) of the target groups.
- `--health-check-type` - The service to use for the health checks.
- `--health-check-grace-period` - The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service.
- `--query` - The JMESPath query string.
- `--output` - The output format.

## Create a Route 53

### Step 1: Create a Hosted Zone

To create a Hosted Zone, run the following command:

```bash
# aws domain name
AWS_DOMAIN=("aws.example.com")

# Create a Hosted Zone
AWS_HOSTED_ZONE=$(aws route53 create-hosted-zone \
  --name $AWS_DOMAIN \
  --caller-reference $(date +%s) \
  --hosted-zone-config Comment="aws-hosted-zone",PrivateZone=false \
  --query 'HostedZone.Id' \
  --output text)

# add tag to hosted zone
aws route53 list-tags-for-resources \
  --resource-type hostedzone \
  --resource-ids $AWS_HOSTED_ZONE \
  --tags Key=Name,Value=aws-hosted-zone
```

Explanation:

- `aws route53 create-hosted-zone` - Creates a hosted zone, which is a container for records that you want to publish to DNS.
- `--name` - The name of the domain. This must be a fully-specified domain, for example, www.example.com. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical.
- `--caller-reference` - A unique string that identifies the request and that allows failed `CreateHostedZone` requests to be retried without the risk of executing the operation twice.
- `--hosted-zone-config` - A complex type that contains an optional comment about your hosted zone.
- `--query` - The JMESPath query string.
- `--output` - The output format.

### Step 2: Create a Record Set

To create a Record Set, run the following command:

```bash
# Create a record-set.json file
cat <<EOF > record-set.json
{
  "Comment": "aws-record-set",
  "Changes": [
    {
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "$AWS_DOMAIN",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "$AWS_LOAD_BALANCER_DNS_NAME",
          "EvaluateTargetHealth": false
        }
      }
    }
  ]
}
EOF

# Create a Record Set
aws route53 change-resource-record-sets \
  --hosted-zone-id $AWS_HOSTED_ZONE \
  --change-batch file://record-set.json
```

Explanation:

- `aws route53 change-resource-record-sets` - Creates, changes, or deletes authoritative DNS information on all Amazon Route 53 servers.
- `--hosted-zone-id` - The ID of the hosted zone that contains the resource record sets that you want to change.
- `--change-batch` - A complex type that contains an optional comment and the Changes element.

## Conclusion

In this article, we have learned how to create a VPC, Subnet, Internet Gateway, Route Table, Security Group, Launch Template, Load Balancer, Auto Scaling Group, and Hosted Zone using AWS CLI.

## References

- [AWS - AWS CLI](https://aws.amazon.com/cli/)
- [AWS - IAM](https://aws.amazon.com/iam/)
- [AWS - VPC](https://aws.amazon.com/vpc/)
- [AWS - EC2](https://aws.amazon.com/ec2/)
- [AWS - CloudWatch](https://aws.amazon.com/cloudwatch/)
- [AWS - SNSTopic](https://aws.amazon.com/sns/)
- [AWS - Auto Scaling](https://aws.amazon.com/autoscaling/)
- [AWS - Load Balancing](https://aws.amazon.com/elasticloadbalancing/)
- [AWS - Route 53](https://aws.amazon.com/route53/)
- [AWS - IAM CLI](https://docs.aws.amazon.com/cli/latest/reference/iam/index.html)
- [AWS - VPC CLI](https://docs.aws.amazon.com/cli/latest/reference/ec2/index.html)
- [AWS - EC2 CLI](https://docs.aws.amazon.com/cli/latest/reference/ec2/index.html)
- [AWS - CloudWatch CLI](https://docs.aws.amazon.com/cli/latest/reference/cloudwatch/index.html)
- [AWS - SNSTopic CLI](https://docs.aws.amazon.com/cli/latest/reference/sns/index.html)
- [AWS - Auto Scaling CLI](https://docs.aws.amazon.com/cli/latest/reference/autoscaling/index.html)
- [AWS - Load Balancing CLI](https://docs.aws.amazon.com/cli/latest/reference/elbv2/index.html)
- [AWS - Route 53 CLI](https://docs.aws.amazon.com/cli/latest/reference/route53/index.html)
- [AWS - IAM Policy Generator](https://awspolicygen.s3.amazonaws.com/policygen.html)
