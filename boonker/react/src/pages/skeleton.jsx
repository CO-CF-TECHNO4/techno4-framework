import React, { useState } from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  List,
  ListItem,
  Card,
  SkeletonBlock,
  Row,
  Button,
} from 'techno4-react';

export default () => {
  const [loading, setLoading] = useState(false);
  const [effect, setEffect] = useState(null);

  const load = (newEffect) => {
    if (loading) return;
    setEffect(newEffect);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <Page>
      <Navbar title="Skeleton Elements" backLink="Back"></Navbar>
      <Block strong>
        <p>
          Skeleton (or Ghost) elements designed to improve perceived performance and make app feels
          faster.
        </p>
        <p>
          techno4 comes with two types of such elements: Skeleton Block and Skeleton Text.
          Skeleton block is a gray box that can be used as placeholder for any element. Skeleton
          text uses special built-in skeleton font to render each character of such text as gray
          rectangle. Skeleton text allows to make such elements responsive and feel more natural.
        </p>
        <p>It can be used in any places and with any elements.</p>
      </Block>

      <BlockTitle>Skeleton List</BlockTitle>
      <List mediaList className="skeleton-text">
        <ListItem
          title="Title"
          subtitle="Subtitle"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
        >
          <SkeletonBlock
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            slot="media"
          />
        </ListItem>
        <ListItem
          title="Title"
          subtitle="Subtitle"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
        >
          <SkeletonBlock
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            slot="media"
          />
        </ListItem>
      </List>

      <BlockTitle>Skeleton Card</BlockTitle>
      <Card
        className="skeleton-text"
        title="Card Header"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
        footer="Card Footer"
      ></Card>

      <BlockTitle>Loading Effects</BlockTitle>
      <Block strong>
        <p>It supports few loading effects:</p>
        <Row tag="p">
          <Button fill small round className="col" onClick={() => load('fade')}>
            Fade
          </Button>
          <Button fill small round className="col" onClick={() => load('wave')}>
            Wave
          </Button>
          <Button fill small round className="col" onClick={() => load('pulse')}>
            Pulse
          </Button>
        </Row>
      </Block>
      {loading ? (
        <List mediaList v-if="loading">
          {[1, 2, 3].map((n) => (
            <ListItem
              key={n}
              className={`skeleton-text skeleton-effect-${effect}`}
              title="Full Name"
              subtitle="Position"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
            >
              <SkeletonBlock
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                slot="media"
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <List mediaList>
          <ListItem
            title="John Doe"
            subtitle="CEO"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
          >
            <img
              src="https://placeimg.com/80/80/people/1"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              slot="media"
            />
          </ListItem>
          <ListItem
            title="Jane Doe"
            subtitle="Marketing"
            text="Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
          >
            <img
              src="https://placeimg.com/80/80/people/2"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              slot="media"
            />
          </ListItem>
          <ListItem
            title="Kate Johnson"
            subtitle="Admin"
            text="Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
          >
            <img
              src="https://placeimg.com/80/80/people/3"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              slot="media"
            />
          </ListItem>
        </List>
      )}
    </Page>
  );
};
