import React, { useRef } from 'react';
import {
  Navbar,
  Page,
  BlockTitle,
  Block,
  Progressbar,
  Button,
  Segmented,
  List,
  ListItem,
  t4,
} from 'techno4-react';

export default () => {
  const determinateLoading = useRef(false);
  const infiniteLoading = useRef(false);

  const setInlineProgress = (value) => {
    t4.progressbar.set('#demo-inline-progressbar', value);
  };
  const showDeterminate = (inline) => {
    if (determinateLoading.current) return;
    determinateLoading.current = true;
    let progressBarEl;
    if (inline) {
      progressBarEl = t4.progressbar.show('#demo-determinate-container', 0);
    } else {
      progressBarEl = t4.progressbar.show(0);
    }
    let progress = 0;
    function simulateLoading() {
      setTimeout(() => {
        const progressBefore = progress;
        progress += Math.random() * 20;
        t4.progressbar.set(progressBarEl, progress);
        if (progressBefore < 100) {
          simulateLoading(); // keep "loading"
        } else {
          determinateLoading.current = false;
          t4.progressbar.hide(progressBarEl); // hide
        }
      }, Math.random() * 200 + 200);
    }
    simulateLoading();
  };
  const showInfinite = (multiColor) => {
    if (infiniteLoading.current) return;
    infiniteLoading.current = true;
    if (multiColor) {
      t4.progressbar.show('multi');
    } else {
      t4.progressbar.show();
    }
    setTimeout(() => {
      infiniteLoading.current = false;
      t4.progressbar.hide();
    }, 3000);
  };
  return (
    <Page>
      <Navbar title="Progress Bar" backLink="Back"></Navbar>
      <Block>
        <p>
          In addition to <a href="/preloader/">Preloader</a>, techno4 also comes with fancy
          animated determinate and infinite/indeterminate progress bars to indicate some activity.
        </p>
      </Block>
      <BlockTitle>Determinate Progress Bar</BlockTitle>
      <Block strong>
        <p>
          When progress bar is determinate it indicates how long an operation will take when the
          percentage complete is detectable.
        </p>
        <p>Inline determinate progress bar:</p>
        <div>
          <p>
            <Progressbar progress={10} id="demo-inline-progressbar" />
          </p>
          <Segmented raised>
            <Button
              onClick={() => {
                setInlineProgress(10);
              }}
            >
              10%
            </Button>
            <Button
              onClick={() => {
                setInlineProgress(30);
              }}
            >
              30%
            </Button>
            <Button
              onClick={() => {
                setInlineProgress(50);
              }}
            >
              50%
            </Button>
            <Button
              onClick={() => {
                setInlineProgress(100);
              }}
            >
              100%
            </Button>
          </Segmented>
        </div>
        <div>
          <p>Inline determinate load & hide:</p>
          <p id="demo-determinate-container"></p>
          <p>
            <Button
              fill
              onClick={() => {
                showDeterminate(true);
              }}
            >
              Start Loading
            </Button>
          </p>
        </div>
        <div>
          <p>Overlay with determinate progress bar on top of the app:</p>
          <p>
            <Button
              fill
              onClick={() => {
                showDeterminate(false);
              }}
            >
              Start Loading
            </Button>
          </p>
        </div>
      </Block>
      <BlockTitle>Infinite Progress Bar</BlockTitle>
      <Block strong>
        <p>
          When progress bar is infinite/indeterminate it requests that the user wait while something
          finishes when it’s not necessary to indicate how long it will take.
        </p>
        <p>Inline infinite progress bar</p>
        <p>
          <Progressbar infinite />
        </p>
        <p>Multi-color infinite progress bar</p>
        <p>
          <Progressbar infinite color="multi" />
        </p>
        <div>
          <p>Overlay with infinite progress bar on top of the app</p>
          <p id="demo-infinite-container"></p>
          <p>
            <Button
              fill
              onClick={() => {
                showInfinite(false);
              }}
            >
              Start Loading
            </Button>
          </p>
        </div>
        <div>
          <p>Overlay with infinite multi-color progress bar on top of the app</p>
          <p>
            <Button
              fill
              onClick={() => {
                showInfinite(true);
              }}
            >
              Start Loading
            </Button>
          </p>
        </div>
      </Block>
      <BlockTitle>Colors</BlockTitle>
      <List simpleList>
        <ListItem>
          <Progressbar color="blue" progress={10} />
        </ListItem>
        <ListItem>
          <Progressbar color="red" progress={20} />
        </ListItem>
        <ListItem>
          <Progressbar color="pink" progress={30} />
        </ListItem>
        <ListItem>
          <Progressbar color="green" progress={80} />
        </ListItem>
        <ListItem>
          <Progressbar color="yellow" progress={90} />
        </ListItem>
        <ListItem>
          <Progressbar color="orange" progress={100} />
        </ListItem>
      </List>
    </Page>
  );
};
