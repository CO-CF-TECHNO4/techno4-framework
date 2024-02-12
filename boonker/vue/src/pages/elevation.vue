<template>
  <t4-page>
    <t4-navbar title="Elevation" back-link="Back"></t4-navbar>
    <t4-block strong>
      <p>
        Shadows provide important visual cues about objects' depth and directional movement. They
        are the only visual cue indicating the amount of separation between surfaces. An object’s
        elevation determines the appearance of its shadow. The elevation values are mapped out in a
        "z-space" and range from 1 to 24.
      </p>
      <p>
        Elevation can be added to any element by adding <code>elevation-0</code>,
        <code>elevation-1</code>, ..., <code>elevation-24</code> classes.
      </p>
      <p>
        To add different elevation only on hover (desktop), you can use
        <code>elevation-hover-0</code>, <code>elevation-hover-1</code>, ...,
        <code>elevation-hover-24</code> classes.
      </p>
      <p>
        To specify elevation only when item pressed, you can use <code>elevation-pressed-0</code>,
        <code>elevation-pressed-1</code>, ..., <code>elevation-pressed-24</code> classes.
      </p>
    </t4-block>
    <t4-block>
      <t4-row>
        <t4-col>
          <div class="elevation-demo elevation-1">1</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-2">2</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-3">3</div>
        </t4-col>
      </t4-row>
      <t4-row>
        <t4-col>
          <div class="elevation-demo elevation-4">4</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-5">5</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-6">6</div>
        </t4-col>
      </t4-row>
      <t4-row>
        <t4-col>
          <div class="elevation-demo elevation-7">7</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-8">8</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-9">9</div>
        </t4-col>
      </t4-row>
      <t4-row>
        <t4-col>
          <div class="elevation-demo elevation-10">10</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-11">11</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-12">12</div>
        </t4-col>
      </t4-row>
      <t4-row>
        <t4-col>
          <div class="elevation-demo elevation-13">13</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-14">14</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-15">15</div>
        </t4-col>
      </t4-row>
      <t4-row>
        <t4-col>
          <div class="elevation-demo elevation-16">16</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-17">17</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-18">18</div>
        </t4-col>
      </t4-row>
      <t4-row>
        <t4-col>
          <div class="elevation-demo elevation-19">19</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-20">20</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-21">21</div>
        </t4-col>
      </t4-row>
      <t4-row>
        <t4-col>
          <div class="elevation-demo elevation-22">22</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-23">23</div>
        </t4-col>
        <t4-col>
          <div class="elevation-demo elevation-24">24</div>
        </t4-col>
      </t4-row>
      <t4-row>
        <t4-col>
          <div
            class="elevation-demo elevation-6 elevation-hover-24 elevation-pressed-12 elevation-transition"
          >
            6 + hover-24 + pressed-12
          </div>
        </t4-col>
      </t4-row>
    </t4-block>
  </t4-page>
</template>
<script>
import { t4Page, t4Navbar, t4Block, t4Row, t4Col } from 'techno4-vue';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4Block,
    t4Row,
    t4Col,
  },
};
</script>
