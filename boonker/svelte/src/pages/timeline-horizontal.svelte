<script>
  import { Navbar, Page } from 'techno4-svelte';
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<Page>
  <Navbar noShadow title="Horizontal Timeline" backLink="Back"></Navbar>
  <div class="timeline timeline-horizontal col-33 tablet-20">
    <div class="timeline-item">
      <div class="timeline-item-date">21 <small>DEC</small></div>
      <div class="timeline-item-content">
        <div class="timeline-item-inner">
          <div class="timeline-item-time">12:56</div>
          <div class="timeline-item-title">Title 1</div>
          <div class="timeline-item-subtitle">Subtitle 1</div>
          <div class="timeline-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
        </div>
        <div class="timeline-item-inner">
          <div class="timeline-item-time">13:15</div>
          <div class="timeline-item-title">Title 2</div>
          <div class="timeline-item-subtitle">Subtitle 2</div>
          <div class="timeline-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
        </div>
        <div class="timeline-item-inner">
          <div class="timeline-item-time">14:45</div>
          <div class="timeline-item-text">Do something</div>
        </div>
        <div class="timeline-item-inner">
          <div class="timeline-item-time">16:11</div>
          <div class="timeline-item-text">Do something else</div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">22 <small>DEC</small></div>
      <div class="timeline-item-content">Plain text goes here</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">23 <small>DEC</small></div>
      <div class="timeline-item-content">
        <div class="card no-safe-areas">
          <div class="card-header">Card</div>
          <div class="card-content card-content-padding">Card Content</div>
          <div class="card-footer">Card Footer</div>
        </div>
        <div class="card no-safe-areas">
          <div class="card-content card-content-padding">Another Card Content</div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">24 <small>DEC</small></div>
      <div class="timeline-item-content">
        <div class="list links-list inset no-safe-areas">
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">25 <small>DEC</small></div>
      <div class="timeline-item-content">
        <div class="timeline-item-time">11:11</div>
        <div class="timeline-item-text">Task 1</div>
        <div class="timeline-item-time">12:33</div>
        <div class="timeline-item-text">Task 2</div>
        <div class="timeline-item-time">13:24</div>
        <div class="timeline-item-text">Task 3</div>
        <div class="timeline-item-time">14:55</div>
        <div class="timeline-item-text">Task 4</div>
        <div class="timeline-item-time">15:15</div>
        <div class="timeline-item-text">Task 5</div>
        <div class="timeline-item-time">16:54</div>
        <div class="timeline-item-text">Task 6</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-item-date">26 <small>DEC</small></div>
      <div class="timeline-item-content">
        <div class="timeline-item-inner">
          <div class="timeline-item-time">11:11</div>
          <div class="timeline-item-text">Task 1</div>
        </div>
        <div class="timeline-item-inner">
          <div class="timeline-item-time">12:33</div>
          <div class="timeline-item-text">Task 2</div>
        </div>
        <div class="timeline-item-inner">
          <div class="timeline-item-time">13:24</div>
          <div class="timeline-item-text">Task 3</div>
        </div>
        <div class="timeline-item-inner">
          <div class="timeline-item-time">14:55</div>
          <div class="timeline-item-text">Task 4</div>
        </div>
        <div class="timeline-item-inner">
          <div class="timeline-item-time">15:15</div>
          <div class="timeline-item-text">Task 5</div>
        </div>
        <div class="timeline-item-inner">
          <div class="timeline-item-time">16:54</div>
          <div class="timeline-item-text">Task 6</div>
        </div>
      </div>
    </div>
  </div>
</Page>
