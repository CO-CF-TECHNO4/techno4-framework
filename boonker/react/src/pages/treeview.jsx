import React, { useState } from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  Treeview,
  TreeviewItem,
  Checkbox,
  t4,
} from 'techno4-react';

export default () => {
  const [state, setState] = useState({
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
  });

  const toggleSelectable = (e, item) => {
    if (t4.$(e.target).is('.treeview-toggle')) return;
    state.selectedItem = item;
    setState({ ...state });
  };

  const loadChildren = (done) => {
    setTimeout(() => {
      // call done() to hide preloader
      done();
      state.loadedChildren = [
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
      setState({ ...state });
    }, 2000);
  };

  return (
    <Page>
      <Navbar title="Treeview" backLink="Back" />

      <BlockTitle>Basic tree view</BlockTitle>
      <Block strong className="no-padding-horizontal">
        <Treeview>
          <TreeviewItem label="Item 1">
            <TreeviewItem label="Sub Item 1">
              <TreeviewItem label="Sub Sub Item 1" />
              <TreeviewItem label="Sub Sub Item 2" />
            </TreeviewItem>
            <TreeviewItem label="Sub Item 2">
              <TreeviewItem label="Sub Sub Item 1" />
              <TreeviewItem label="Sub Sub Item 2" />
            </TreeviewItem>
          </TreeviewItem>
          <TreeviewItem label="Item 2">
            <TreeviewItem label="Sub Item 1">
              <TreeviewItem label="Sub Sub Item 1" />
              <TreeviewItem label="Sub Sub Item 2" />
            </TreeviewItem>
            <TreeviewItem label="Sub Item 2">
              <TreeviewItem label="Sub Sub Item 1" />
              <TreeviewItem label="Sub Sub Item 2" />
            </TreeviewItem>
          </TreeviewItem>
          <TreeviewItem label="Item 3" />
        </Treeview>
      </Block>

      <BlockTitle>With icons</BlockTitle>
      <Block strong className="no-padding-horizontal">
        <Treeview>
          <TreeviewItem label="images" icont4="folder_fill">
            <TreeviewItem label="avatar.png" icont4="photo_fill" />
            <TreeviewItem label="background.jpg" icont4="photo_fill" />
          </TreeviewItem>
          <TreeviewItem label="documents" icont4="folder_fill">
            <TreeviewItem label="cv.docx" icont4="doc_text_fill" />
            <TreeviewItem label="info.docx" icont4="doc_text_fill" />
          </TreeviewItem>
          <TreeviewItem label=".gitignore" icont4="logo_github" />
          <TreeviewItem label="index.html" icont4="doc_text_fill" />
        </Treeview>
      </Block>

      <BlockTitle>With checkboxes</BlockTitle>
      <Block strong className="no-padding-horizontal">
        <Treeview>
          <TreeviewItem label="images" icont4="folder_fill">
            <Checkbox
              slot="content-start"
              checked={Object.values(state.checkboxes.images).indexOf(false) < 0}
              indeterminate={
                Object.values(state.checkboxes.images).indexOf(false) >= 0 &&
                Object.values(state.checkboxes.images).indexOf(true) >= 0
              }
              onChange={(e) => {
                Object.keys(state.checkboxes.images).forEach((k) => {
                  state.checkboxes.images[k] = e.target.checked;
                });
                setState({ ...state });
              }}
            />
            <TreeviewItem label="avatar.png" icont4="photo_fill">
              <Checkbox
                slot="content-start"
                checked={state.checkboxes.images['avatar.png']}
                onChange={(e) => {
                  state.checkboxes.images['avatar.png'] = e.target.checked;
                  setState({ ...state });
                }}
              />
            </TreeviewItem>
            <TreeviewItem label="background.jpg" icont4="photo_fill">
              <Checkbox
                slot="content-start"
                checked={state.checkboxes.images['background.jpg']}
                onChange={(e) => {
                  state.checkboxes.images['background.jpg'] = e.target.checked;
                  setState({ ...state });
                }}
              />
            </TreeviewItem>
          </TreeviewItem>
          <TreeviewItem label="documents" icont4="folder_fill">
            <Checkbox
              slot="content-start"
              checked={Object.values(state.checkboxes.documents).indexOf(false) < 0}
              indeterminate={
                Object.values(state.checkboxes.documents).indexOf(false) >= 0 &&
                Object.values(state.checkboxes.documents).indexOf(true) >= 0
              }
              onChange={(e) => {
                Object.keys(state.checkboxes.documents).forEach((k) => {
                  state.checkboxes.documents[k] = e.target.checked;
                });
                setState({ ...state });
              }}
            />
            <TreeviewItem label="cv.docx" icont4="doc_text_fill">
              <Checkbox
                slot="content-start"
                checked={state.checkboxes.documents['cv.docx']}
                onChange={(e) => {
                  state.checkboxes.documents['cv.docx'] = e.target.checked;
                  setState({ ...state });
                }}
              />
            </TreeviewItem>
            <TreeviewItem label="info.docx" icont4="doc_text_fill">
              <Checkbox
                slot="content-start"
                checked={state.checkboxes.documents['info.docx']}
                onChange={(e) => {
                  state.checkboxes.documents['info.docx'] = e.target.checked;
                  setState({ ...state });
                }}
              />
            </TreeviewItem>
          </TreeviewItem>
          <TreeviewItem label=".gitignore" icont4="logo_github">
            <Checkbox
              slot="content-start"
              checked={state.checkboxes['.gitignore']}
              onChange={(e) => {
                state.checkboxes['.gitignore'] = e.target.checked;
                setState({ ...state });
              }}
            />
          </TreeviewItem>
          <TreeviewItem label="index.html" icont4="doc_text_fill">
            <Checkbox
              slot="content-start"
              checked={state.checkboxes['index.html']}
              onChange={(e) => {
                state.checkboxes['index.html'] = e.target.checked;
                setState({ ...state });
              }}
            />
          </TreeviewItem>
        </Treeview>
      </Block>

      <BlockTitle>Whole item as toggle</BlockTitle>
      <Block strong className="no-padding-horizontal">
        <Treeview>
          <TreeviewItem itemToggle label="images" icont4="folder_fill">
            <TreeviewItem label="avatar.png" icont4="photo_fill" />
            <TreeviewItem label="background.jpg" icont4="photo_fill" />
          </TreeviewItem>
          <TreeviewItem itemToggle label="documents" icont4="folder_fill">
            <TreeviewItem label="cv.docx" icont4="doc_text_fill" />
            <TreeviewItem label="info.docx" icont4="doc_text_fill" />
          </TreeviewItem>
          <TreeviewItem label=".gitignore" icont4="logo_github" />
          <TreeviewItem label="index.html" icont4="doc_text_fill" />
        </Treeview>
      </Block>

      <BlockTitle>Selectable</BlockTitle>
      <Block strong className="no-padding-horizontal">
        <Treeview>
          <TreeviewItem
            selectable
            selected={state.selectedItem === 'images'}
            label="images"
            icont4="folder_fill"
            onClick={(e) => toggleSelectable(e, 'images')}
          >
            <TreeviewItem
              selectable
              selected={state.selectedItem === 'avatar.png'}
              label="avatar.png"
              icont4="photo_fill"
              onClick={(e) => toggleSelectable(e, 'avatar.png')}
            />
            <TreeviewItem
              selectable
              selected={state.selectedItem === 'background.jpg'}
              label="background.jpg"
              icont4="photo_fill"
              onClick={(e) => toggleSelectable(e, 'background.jpg')}
            />
          </TreeviewItem>
          <TreeviewItem
            selectable
            selected={state.selectedItem === 'documents'}
            label="documents"
            icont4="folder_fill"
            onClick={(e) => toggleSelectable(e, 'documents')}
          >
            <TreeviewItem
              selectable
              selected={state.selectedItem === 'cv.docx'}
              label="cv.docx"
              icont4="doc_text_fill"
              onClick={(e) => toggleSelectable(e, 'cv.docx')}
            />
            <TreeviewItem
              selectable
              selected={state.selectedItem === 'info.docx'}
              label="info.docx"
              icont4="doc_text_fill"
              onClick={(e) => toggleSelectable(e, 'info.docx')}
            />
          </TreeviewItem>
          <TreeviewItem
            selectable
            selected={state.selectedItem === '.gitignore'}
            label=".gitignore"
            icont4="logo_github"
            onClick={(e) => toggleSelectable(e, '.gitignore')}
          />
          <TreeviewItem
            selectable
            selected={state.selectedItem === 'index.html'}
            label="index.html"
            icont4="doc_text_fill"
            onClick={(e) => toggleSelectable(e, 'index.html')}
          />
        </Treeview>
      </Block>

      <BlockTitle>Preload children</BlockTitle>
      <Block strong className="no-padding-horizontal">
        <Treeview>
          <TreeviewItem
            toggle
            loadChildren
            icont4="person_2_fill"
            label="Users"
            onTreeviewLoadChildren={(e, done) => loadChildren(done)}
          >
            {state.loadedChildren.map((item, index) => (
              <TreeviewItem key={index} icont4="person_fill" label={item.name} />
            ))}
          </TreeviewItem>
        </Treeview>
      </Block>

      <BlockTitle>With links</BlockTitle>
      <Block strong className="no-padding-horizontal">
        <Treeview>
          <TreeviewItem icont4="square_grid_2x2_fill" itemToggle label="Modals">
            <TreeviewItem link="/popup/" icont4="link" label="Popup" />
            <TreeviewItem link="/dialog/" icont4="link" label="Dialog" />
            <TreeviewItem link="/action-sheet/" icont4="link" label="Action Sheet" />
          </TreeviewItem>
          <TreeviewItem icont4="square_grid_2x2_fill" itemToggle label="Navigation Bars">
            <TreeviewItem link="/navbar/" icont4="link" label="Navbar" />
            <TreeviewItem link="/toolbar-tabbar/" icont4="link" label="Toolbar & Tabbar" />
          </TreeviewItem>
        </Treeview>
      </Block>
    </Page>
  );
};
