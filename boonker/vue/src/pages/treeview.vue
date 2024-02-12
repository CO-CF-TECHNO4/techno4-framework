<template>
  <t4-page>
    <t4-navbar title="Treeview" back-link="Back" />

    <t4-block-title>Basic tree view</t4-block-title>
    <t4-block strong class="no-padding-horizontal">
      <t4-treeview>
        <t4-treeview-item label="Item 1">
          <t4-treeview-item label="Sub Item 1">
            <t4-treeview-item label="Sub Sub Item 1" />
            <t4-treeview-item label="Sub Sub Item 2" />
          </t4-treeview-item>
          <t4-treeview-item label="Sub Item 2">
            <t4-treeview-item label="Sub Sub Item 1" />
            <t4-treeview-item label="Sub Sub Item 2" />
          </t4-treeview-item>
        </t4-treeview-item>
        <t4-treeview-item label="Item 2">
          <t4-treeview-item label="Sub Item 1">
            <t4-treeview-item label="Sub Sub Item 1" />
            <t4-treeview-item label="Sub Sub Item 2" />
          </t4-treeview-item>
          <t4-treeview-item label="Sub Item 2">
            <t4-treeview-item label="Sub Sub Item 1" />
            <t4-treeview-item label="Sub Sub Item 2" />
          </t4-treeview-item>
        </t4-treeview-item>
        <t4-treeview-item label="Item 3" />
      </t4-treeview>
    </t4-block>

    <t4-block-title>With icons</t4-block-title>
    <t4-block strong class="no-padding-horizontal">
      <t4-treeview>
        <t4-treeview-item label="images" icon-t4="folder_fill">
          <t4-treeview-item label="avatar.png" icon-t4="photo_fill" />
          <t4-treeview-item label="background.jpg" icon-t4="photo_fill" />
        </t4-treeview-item>
        <t4-treeview-item label="documents" icon-t4="folder_fill">
          <t4-treeview-item label="cv.docx" icon-t4="doc_text_fill" />
          <t4-treeview-item label="info.docx" icon-t4="doc_text_fill" />
        </t4-treeview-item>
        <t4-treeview-item label=".gitignore" icon-t4="logo_github" />
        <t4-treeview-item label="index.html" icon-t4="doc_text_fill" />
      </t4-treeview>
    </t4-block>

    <t4-block-title>With checkboxes</t4-block-title>
    <t4-block strong class="no-padding-horizontal">
      <t4-treeview>
        <t4-treeview-item label="images" icon-t4="folder_fill">
          <template #content-start>
            <t4-checkbox
              :checked="Object.values(checkboxes.images).indexOf(false) < 0"
              :indeterminate="
                Object.values(checkboxes.images).indexOf(false) >= 0 &&
                Object.values(checkboxes.images).indexOf(true) >= 0
              "
              @change="
                (e) =>
                  Object.keys(checkboxes.images).forEach(
                    (k) => (checkboxes.images[k] = e.target.checked),
                  )
              "
            />
          </template>
          <t4-treeview-item label="avatar.png" icon-t4="photo_fill">
            <template #content-start>
              <t4-checkbox
                :checked="checkboxes.images['avatar.png']"
                @change="checkboxes.images['avatar.png'] = $event.target.checked"
              />
            </template>
          </t4-treeview-item>
          <t4-treeview-item label="background.jpg" icon-t4="photo_fill">
            <template #content-start>
              <t4-checkbox
                :checked="checkboxes.images['background.jpg']"
                @change="checkboxes.images['background.jpg'] = $event.target.checked"
              />
            </template>
          </t4-treeview-item>
        </t4-treeview-item>
        <t4-treeview-item label="documents" icon-t4="folder_fill">
          <template #content-start>
            <t4-checkbox
              :checked="Object.values(checkboxes.documents).indexOf(false) < 0"
              :indeterminate="
                Object.values(checkboxes.documents).indexOf(false) >= 0 &&
                Object.values(checkboxes.documents).indexOf(true) >= 0
              "
              @change="
                (e) =>
                  Object.keys(checkboxes.documents).forEach(
                    (k) => (checkboxes.documents[k] = e.target.checked),
                  )
              "
            />
          </template>
          <t4-treeview-item label="cv.docx" icon-t4="doc_text_fill">
            <template #content-start>
              <t4-checkbox
                :checked="checkboxes.documents['cv.docx']"
                @change="checkboxes.documents['cv.docx'] = $event.target.checked"
              />
            </template>
          </t4-treeview-item>
          <t4-treeview-item label="info.docx" icon-t4="doc_text_fill">
            <template #content-start>
              <t4-checkbox
                :checked="checkboxes.documents['info.docx']"
                @change="checkboxes.documents['info.docx'] = $event.target.checked"
              />
            </template>
          </t4-treeview-item>
        </t4-treeview-item>
        <t4-treeview-item label=".gitignore" icon-t4="logo_github">
          <template #content-start>
            <t4-checkbox
              :checked="checkboxes['.gitignore']"
              @change="checkboxes['.gitignore'] = $event.target.checked"
            />
          </template>
        </t4-treeview-item>
        <t4-treeview-item label="index.html" icon-t4="doc_text_fill">
          <template #content-start>
            <t4-checkbox
              :checked="checkboxes['index.html']"
              @change="checkboxes['index.html'] = $event.target.checked"
            />
          </template>
        </t4-treeview-item>
      </t4-treeview>
    </t4-block>

    <t4-block-title>Whole item as toggle</t4-block-title>
    <t4-block strong class="no-padding-horizontal">
      <t4-treeview>
        <t4-treeview-item item-toggle label="images" icon-t4="folder_fill">
          <t4-treeview-item label="avatar.png" icon-t4="photo_fill" />
          <t4-treeview-item label="background.jpg" icon-t4="photo_fill" />
        </t4-treeview-item>
        <t4-treeview-item item-toggle label="documents" icon-t4="folder_fill">
          <t4-treeview-item label="cv.docx" icon-t4="doc_text_fill" />
          <t4-treeview-item label="info.docx" icon-t4="doc_text_fill" />
        </t4-treeview-item>
        <t4-treeview-item label=".gitignore" icon-t4="logo_github" />
        <t4-treeview-item label="index.html" icon-t4="doc_text_fill" />
      </t4-treeview>
    </t4-block>

    <t4-block-title>Selectable</t4-block-title>
    <t4-block strong class="no-padding-horizontal">
      <t4-treeview>
        <t4-treeview-item
          selectable
          :selected="selectedItem === 'images'"
          label="images"
          icon-t4="folder_fill"
          @click="toggleSelectable($event, 'images')"
        >
          <t4-treeview-item
            selectable
            :selected="selectedItem === 'avatar.png'"
            label="avatar.png"
            icon-t4="photo_fill"
            @click="toggleSelectable($event, 'avatar.png')"
          />
          <t4-treeview-item
            selectable
            :selected="selectedItem === 'background.jpg'"
            label="background.jpg"
            icon-t4="photo_fill"
            @click="toggleSelectable($event, 'background.jpg')"
          />
        </t4-treeview-item>
        <t4-treeview-item
          selectable
          :selected="selectedItem === 'documents'"
          label="documents"
          icon-t4="folder_fill"
          @click="toggleSelectable($event, 'documents')"
        >
          <t4-treeview-item
            selectable
            :selected="selectedItem === 'cv.docx'"
            label="cv.docx"
            icon-t4="doc_text_fill"
            @click="toggleSelectable($event, 'cv.docx')"
          />
          <t4-treeview-item
            selectable
            :selected="selectedItem === 'info.docx'"
            label="info.docx"
            icon-t4="doc_text_fill"
            @click="toggleSelectable($event, 'info.docx')"
          />
        </t4-treeview-item>
        <t4-treeview-item
          selectable
          :selected="selectedItem === '.gitignore'"
          label=".gitignore"
          icon-t4="logo_github"
          @click="toggleSelectable($event, '.gitignore')"
        />
        <t4-treeview-item
          selectable
          :selected="selectedItem === 'index.html'"
          label="index.html"
          icon-t4="doc_text_fill"
          @click="toggleSelectable($event, 'index.html')"
        />
      </t4-treeview>
    </t4-block>

    <t4-block-title>Preload children</t4-block-title>
    <t4-block strong class="no-padding-horizontal">
      <t4-treeview>
        <t4-treeview-item
          toggle
          load-children
          icon-t4="person_2_fill"
          label="Users"
          @treeview:loadchildren="loadChildren"
        >
          <t4-treeview-item
            v-for="(item, index) in loadedChildren"
            :key="index"
            icon-t4="person_fill"
            :label="item.name"
          />
        </t4-treeview-item>
      </t4-treeview>
    </t4-block>

    <t4-block-title>With links</t4-block-title>
    <t4-block strong class="no-padding-horizontal">
      <t4-treeview>
        <t4-treeview-item icon-t4="square_grid_2x2_fill" item-toggle label="Modals">
          <t4-treeview-item link="/popup/" icon-t4="link" label="Popup" />
          <t4-treeview-item link="/dialog/" icon-t4="link" label="Dialog" />
          <t4-treeview-item link="/action-sheet/" icon-t4="link" label="Action Sheet" />
        </t4-treeview-item>
        <t4-treeview-item icon-t4="square_grid_2x2_fill" item-toggle label="Navigation Bars">
          <t4-treeview-item link="/navbar/" icon-t4="link" label="Navbar" />
          <t4-treeview-item link="/toolbar-tabbar/" icon-t4="link" label="Toolbar & Tabbar" />
        </t4-treeview-item>
      </t4-treeview>
    </t4-block>
  </t4-page>
</template>
<script>
import {
  t4Page,
  t4Navbar,
  t4BlockTitle,
  t4Block,
  t4Treeview,
  t4TreeviewItem,
  t4Checkbox,
} from 'techno4-vue';
import $ from 'dom64';

export default {
  components: {
    t4Page,
    t4Navbar,
    t4BlockTitle,
    t4Block,
    t4Treeview,
    t4TreeviewItem,
    t4Checkbox,
  },
  data() {
    return {
      checkboxes: {
        images: {
          'avatar.png': false,
          'background.jpg': false,
        },
        documents: {
          'cv.docx': false,
          'info.docx': false,
        },
        '.gitignore': false,
        'index.html': false,
      },
      selectedItem: null,
      loadedChildren: [],
    };
  },
  methods: {
    toggleSelectable(e, item) {
      const self = this;
      if ($(e.target).is('.treeview-toggle')) return;
      self.selectedItem = item;
    },
    loadChildren(e, done) {
      const self = this;
      setTimeout(() => {
        // call done() to hide preloader
        done();
        self.loadedChildren = [
          {
            name: 'John Doe',
          },
          {
            name: 'Jane Doe',
          },
          {
            name: 'Calvin Johnson',
          },
        ];
      }, 2000);
    },
  },
};
</script>
