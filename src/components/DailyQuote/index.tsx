import React, { useState, useEffect } from 'react';

// labs
import { fetch } from '@/libs/fetch.lib';

import './style.scss';

// ui
import Button from '@/ui/Button';

// components
import GetIcon from '@/components/GetIcon';

const index = ({ domain }: any) => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    const url = 'https://quotes.rest/qod?language=en';
    const getQuote = async () => {
      const response = await fetch(url);
      setQuote(response.contents.quotes[0]);
      setLoading(false);
    };
    getQuote();
  }, []);

  const hundelSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(
      `${quote.quote} by ${quote.author}`,
    );
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  const hundelCopy = () => {
    const copyText = `"${quote.quote}"\r\n-by ${quote.author}\r\n\r\n${domain}daily-quote`;

    copyTextToClipboard(copyText)
      .then(() => {
        setCopy(true);

        setTimeout(() => {
          setCopy(false);
        }, 2500);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const hundelShareToTwitter = () => {
    const text = `"${quote.quote}" -by ${quote.author} ${domain}daily-quote`;
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '__blank');
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={'card'}>
          <header>
            <h3>{quote.title}</h3>
          </header>
          <div className={'card__content'}>
            <div className={'card__content-quote'}>
              <p>{quote.quote}</p>
            </div>
            <div className={'card__content-author'}>
              <span>__</span>
              <p>By {quote.author}</p>
            </div>
          </div>
          <div className={'card__footer'}>
            <div className={'card__footer-features'}>
              <div className={'card__footer-features_buttons'}>
                <Button button_type={'outline'} onClick={hundelSpeech}>
                  <GetIcon icon={'VolumeIcon'} />
                </Button>
                <Button
                  button_type={`outline`}
                  className={`${copy ? 'copied' : ''}`}
                  onClick={hundelCopy}
                >
                  {copy ? (
                    <GetIcon icon={'CheckboxCheckedIcon'} />
                  ) : (
                    <GetIcon icon={'CopyIcon'} />
                  )}
                </Button>
                <Button button_type={'outline'} onClick={hundelShareToTwitter}>
                  <GetIcon icon={'TwitterIcon'} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
