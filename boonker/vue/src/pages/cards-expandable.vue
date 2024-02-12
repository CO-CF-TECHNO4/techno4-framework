<template>
  <t4-page>
    <t4-navbar title="Cards Expandable" back-link="Back"></t4-navbar>

    <t4-block>
      <p>
        In addition to usual <a href="/cards/">Cards</a> there are also Expandable Cards that allow
        to store more information and illustrations about particular subject.
      </p>
    </t4-block>

    <div class="demo-expandable-cards">
      <t4-card expandable>
        <t4-card-content :padding="false">
          <div class="bg-color-red" :style="{ height: '300px' }">
            <t4-card-header text-color="white" class="display-block">
              techno4
              <br />
              <small :style="{ opacity: 0.7 }">Build Mobile Apps</small>
            </t4-card-header>
            <t4-link
              card-close
              color="white"
              class="card-opened-fade-in"
              :style="{ position: 'absolute', right: '15px', top: '15px' }"
              icon-t4="xmark_circle_fill"
            ></t4-link>
          </div>
          <div class="card-content-padding">
            <p>
              techno4 - is a free and open source HTML mobile framework to develop hybrid mobile
              apps or web apps with iOS or Android (Material) native look and feel. It is also an
              indispensable prototyping apps tool to show working app prototype as soon as possible
              in case you need to. techno4 is created by Vladimir Kharlampidi.
            </p>
            <p>
              The main approach of the techno4 is to give you an opportunity to create iOS and
              Android (Material) apps with HTML, CSS and JavaScript easily and clear. techno4 is
              full of freedom. It doesn't limit your imagination or offer ways of any solutions
              somehow. techno4 gives you freedom!
            </p>
            <p>
              techno4 is not compatible with all platforms. It is focused only on iOS and Android
              (Material) to bring the best experience and simplicity.
            </p>
            <p>
              techno4 is definitely for you if you decide to build iOS and Android hybrid app
              (Cordova or Capacitor) or web app that looks like and feels as great native iOS or
              Android (Material) apps.
            </p>
            <p>
              <t4-button fill round large card-close color="red">Close</t4-button>
            </p>
          </div>
        </t4-card-content>
      </t4-card>

      <t4-card expandable>
        <t4-card-content :padding="false">
          <div class="bg-color-yellow" :style="{ height: '300px' }">
            <t4-card-header text-color="black" class="display-block">
              techno4
              <br />
              <small :style="{ opacity: 0.7 }">Build Mobile Apps</small>
            </t4-card-header>
            <t4-link
              card-close
              color="black"
              class="card-opened-fade-in"
              :style="{ position: 'absolute', right: '15px', top: '15px' }"
              icon-t4="xmark_circle_fill"
            ></t4-link>
          </div>
          <div class="card-content-padding">
            <p>
              techno4 - is a free and open source HTML mobile framework to develop hybrid mobile
              apps or web apps with iOS or Android (Material) native look and feel. It is also an
              indispensable prototyping apps tool to show working app prototype as soon as possible
              in case you need to. techno4 is created by Vladimir Kharlampidi.
            </p>
            <p>
              The main approach of the techno4 is to give you an opportunity to create iOS and
              Android (Material) apps with HTML, CSS and JavaScript easily and clear. techno4 is
              full of freedom. It doesn't limit your imagination or offer ways of any solutions
              somehow. techno4 gives you freedom!
            </p>
            <p>
              techno4 is not compatible with all platforms. It is focused only on iOS and Android
              (Material) to bring the best experience and simplicity.
            </p>
            <p>
              techno4 is definitely for you if you decide to build iOS and Android hybrid app
              (Cordova or Capacitor) or web app that looks like and feels as great native iOS or
              Android (Material) apps.
            </p>
            <p>
              <t4-button fill round large card-close color="yellow" text-color="black"
                >Close</t4-button
              >
            </p>
          </div>
        </t4-card-content>
      </t4-card>

      <t4-card expandable>
        <t4-card-content :padding="false">
          <div
            :style="{
              background: 'url(./img/beach.jpg) no-repeat center bottom',
              'background-size': 'cover',
              height: '240px',
            }"
          ></div>
          <t4-link
            card-close
            color="white"
            class="card-opened-fade-in"
            :style="{ position: 'absolute', right: '15px', top: '15px' }"
            icon-t4="xmark_circle_fill"
          ></t4-link>
          <t4-card-header :style="{ height: '60px' }">Beach, Goa</t4-card-header>
          <div class="card-content-padding">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus rhoncus cursus.
              Etiam lorem est, consectetur vitae tempor a, volutpat eget purus. Duis urna lectus,
              vehicula at quam id, sodales dapibus turpis. Suspendisse potenti. Proin condimentum
              luctus nulla, et rhoncus ante rutrum eu. Maecenas ut tincidunt diam. Vestibulum
              lacinia dui ligula, sit amet pulvinar nisl blandit luctus. Vestibulum aliquam ligula
              nulla, tincidunt rhoncus tellus interdum at. Phasellus mollis ipsum at mollis
              tristique. Maecenas sit amet tempus justo. Duis dolor elit, mollis quis viverra quis,
              vehicula eu ante. Integer a molestie risus. Vestibulum eu sollicitudin massa, sit amet
              dictum sem. Aliquam nisi tellus, maximus eget placerat in, porta vel lorem. Aenean
              tempus sodales nisl in cursus. Curabitur tincidunt turpis in nisl ornare euismod eget
              at libero.
            </p>
            <p>
              Suspendisse ligula eros, congue in nulla pellentesque, imperdiet blandit sapien. Morbi
              nisi sem, efficitur a rutrum porttitor, feugiat vel enim. Fusce eget vehicula odio, et
              luctus neque. Donec mattis a nulla laoreet commodo. Integer eget hendrerit augue, vel
              porta libero. Morbi imperdiet, eros at ultricies rutrum, eros urna auctor enim, eget
              laoreet massa diam vitae lorem. Proin eget urna ultrices, semper ligula aliquam,
              dignissim eros. Donec vitae augue eu sapien tristique elementum a nec nulla. Aliquam
              erat volutpat. Curabitur condimentum, metus blandit lobortis fringilla, enim mauris
              venenatis neque, et venenatis lorem urna ut justo. Maecenas neque enim, congue ac
              tempor quis, tincidunt ut mi. Donec venenatis ante non consequat molestie. Quisque ut
              rhoncus ligula. Vestibulum sodales maximus justo sit amet ornare. Nullam pulvinar
              eleifend nisi sit amet molestie.
            </p>
            <p>
              <t4-button fill round large card-close>Close</t4-button>
            </p>
          </div>
        </t4-card-content>
      </t4-card>

      <t4-card expandable>
        <t4-card-content :padding="false">
          <div
            :style="{
              background: 'url(./img/monkey.jpg) no-repeat center top',
              'background-size': 'cover',
              height: '400px',
            }"
          >
            <t4-card-header text-color="white">Monkeys</t4-card-header>
            <t4-link
              card-close
              color="white"
              class="card-opened-fade-in"
              :style="{ position: 'absolute', right: '15px', top: '15px' }"
              icon-t4="xmark_circle_fill"
            ></t4-link>
          </div>
          <div class="card-content-padding">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus rhoncus cursus.
              Etiam lorem est, consectetur vitae tempor a, volutpat eget purus. Duis urna lectus,
              vehicula at quam id, sodales dapibus turpis. Suspendisse potenti. Proin condimentum
              luctus nulla, et rhoncus ante rutrum eu. Maecenas ut tincidunt diam. Vestibulum
              lacinia dui ligula, sit amet pulvinar nisl blandit luctus. Vestibulum aliquam ligula
              nulla, tincidunt rhoncus tellus interdum at. Phasellus mollis ipsum at mollis
              tristique. Maecenas sit amet tempus justo. Duis dolor elit, mollis quis viverra quis,
              vehicula eu ante. Integer a molestie risus. Vestibulum eu sollicitudin massa, sit amet
              dictum sem. Aliquam nisi tellus, maximus eget placerat in, porta vel lorem. Aenean
              tempus sodales nisl in cursus. Curabitur tincidunt turpis in nisl ornare euismod eget
              at libero.
            </p>
            <p>
              Suspendisse ligula eros, congue in nulla pellentesque, imperdiet blandit sapien. Morbi
              nisi sem, efficitur a rutrum porttitor, feugiat vel enim. Fusce eget vehicula odio, et
              luctus neque. Donec mattis a nulla laoreet commodo. Integer eget hendrerit augue, vel
              porta libero. Morbi imperdiet, eros at ultricies rutrum, eros urna auctor enim, eget
              laoreet massa diam vitae lorem. Proin eget urna ultrices, semper ligula aliquam,
              dignissim eros. Donec vitae augue eu sapien tristique elementum a nec nulla. Aliquam
              erat volutpat. Curabitur condimentum, metus blandit lobortis fringilla, enim mauris
              venenatis neque, et venenatis lorem urna ut justo. Maecenas neque enim, congue ac
              tempor quis, tincidunt ut mi. Donec venenatis ante non consequat molestie. Quisque ut
              rhoncus ligula. Vestibulum sodales maximus justo sit amet ornare. Nullam pulvinar
              eleifend nisi sit amet molestie.
            </p>
            <p>
              <t4-button fill round large card-close>Close</t4-button>
            </p>
          </div>
        </t4-card-content>
      </t4-card>
    </div>
  </t4-page>
</template>
<script>
import {
  t4Navbar,
  t4Page,
  t4Block,
  t4Card,
  t4CardHeader,
  t4CardContent,
  t4Link,
  t4Button,
} from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4Block,
    t4Card,
    t4CardHeader,
    t4CardContent,
    t4Link,
    t4Button,
  },
};
</script>
