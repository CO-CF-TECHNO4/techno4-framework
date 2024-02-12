<template>
  <t4-page>
    <t4-navbar title="Data Table" back-link="Back" />
    <t4-block-title>Plain table</t4-block-title>
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th class="label-cell">Dessert (100g serving)</th>
            <th class="numeric-cell">Calories</th>
            <th class="numeric-cell">Fat (g)</th>
            <th class="numeric-cell">Carbs</th>
            <th class="numeric-cell">Protein (g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">Frozen yogurt</td>
            <td class="numeric-cell">159</td>
            <td class="numeric-cell">6.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">4.0</td>
          </tr>
          <tr>
            <td class="label-cell">Ice cream sandwich</td>
            <td class="numeric-cell">237</td>
            <td class="numeric-cell">9.0</td>
            <td class="numeric-cell">37</td>
            <td class="numeric-cell">4.4</td>
          </tr>
          <tr>
            <td class="label-cell">Eclair</td>
            <td class="numeric-cell">262</td>
            <td class="numeric-cell">16.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">6.0</td>
          </tr>
          <tr>
            <td class="label-cell">Cupcake</td>
            <td class="numeric-cell">305</td>
            <td class="numeric-cell">3.7</td>
            <td class="numeric-cell">67</td>
            <td class="numeric-cell">4.3</td>
          </tr>
        </tbody>
      </table>
    </div>
    <t4-block-title>Within card</t4-block-title>
    <div class="card data-table">
      <table>
        <thead>
          <tr>
            <th class="label-cell">Dessert (100g serving)</th>
            <th class="numeric-cell">Calories</th>
            <th class="numeric-cell">Fat (g)</th>
            <th class="numeric-cell">Carbs</th>
            <th class="numeric-cell">Protein (g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">Frozen yogurt</td>
            <td class="numeric-cell">159</td>
            <td class="numeric-cell">6.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">4.0</td>
          </tr>
          <tr>
            <td class="label-cell">Ice cream sandwich</td>
            <td class="numeric-cell">237</td>
            <td class="numeric-cell">9.0</td>
            <td class="numeric-cell">37</td>
            <td class="numeric-cell">4.4</td>
          </tr>
          <tr>
            <td class="label-cell">Eclair</td>
            <td class="numeric-cell">262</td>
            <td class="numeric-cell">16.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">6.0</td>
          </tr>
          <tr>
            <td class="label-cell">Cupcake</td>
            <td class="numeric-cell">305</td>
            <td class="numeric-cell">3.7</td>
            <td class="numeric-cell">67</td>
            <td class="numeric-cell">4.3</td>
          </tr>
        </tbody>
      </table>
    </div>
    <t4-block-title>Selectable rows</t4-block-title>
    <div class="data-table data-table-init card">
      <table>
        <thead>
          <tr>
            <th class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </th>
            <th class="label-cell">Dessert (100g serving)</th>
            <th class="numeric-cell">Calories</th>
            <th class="numeric-cell">Fat (g)</th>
            <th class="numeric-cell">Carbs</th>
            <th class="numeric-cell">Protein (g)</th>
            <th class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
              <span>In Stock</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Frozen yogurt</td>
            <td class="numeric-cell">159</td>
            <td class="numeric-cell">6.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">4.0</td>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Ice cream sandwich</td>
            <td class="numeric-cell">237</td>
            <td class="numeric-cell">9.0</td>
            <td class="numeric-cell">37</td>
            <td class="numeric-cell">4.4</td>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Eclair</td>
            <td class="numeric-cell">262</td>
            <td class="numeric-cell">16.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">6.0</td>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Cupcake</td>
            <td class="numeric-cell">305</td>
            <td class="numeric-cell">3.7</td>
            <td class="numeric-cell">67</td>
            <td class="numeric-cell">4.3</td>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <t4-block-title>Tablet-only columns</t4-block-title>
    <div class="block-header">
      <p>"Comments" column will be visible only on devices with screen width >= 768px (tablets)</p>
    </div>
    <div class="data-table data-table-init card">
      <table>
        <thead>
          <tr>
            <th class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </th>
            <th class="label-cell">Dessert (100g serving)</th>
            <th class="numeric-cell">Calories</th>
            <th class="numeric-cell">Fat (g)</th>
            <th class="numeric-cell">Carbs</th>
            <th class="numeric-cell">Protein (g)</th>
            <th class="medium-only">
              <t4-icon
                ios="t4:chat_bubble_text_fill"
                aurora="t4:chat_bubble_text_fill"
                md="material:message"
              />
              Comments
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Frozen yogurt</td>
            <td class="numeric-cell">159</td>
            <td class="numeric-cell">6.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">4.0</td>
            <td class="medium-only">I like frozen yogurt</td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Ice cream sandwich</td>
            <td class="numeric-cell">237</td>
            <td class="numeric-cell">9.0</td>
            <td class="numeric-cell">37</td>
            <td class="numeric-cell">4.4</td>
            <td class="medium-only">But like ice cream more</td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Eclair</td>
            <td class="numeric-cell">262</td>
            <td class="numeric-cell">16.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">6.0</td>
            <td class="medium-only">Super tasty</td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Cupcake</td>
            <td class="numeric-cell">305</td>
            <td class="numeric-cell">3.7</td>
            <td class="numeric-cell">67</td>
            <td class="numeric-cell">4.3</td>
            <td class="medium-only">Don't like it</td>
          </tr>
        </tbody>
      </table>
    </div>
    <t4-block-title>With inputs</t4-block-title>
    <div class="block-header">
      Such tables are widely used in admin interfaces for filtering or search data
    </div>
    <div class="card data-table">
      <table>
        <thead>
          <tr>
            <th class="input-cell">
              <span class="table-head-label">ID</span>
              <div class="input" style="width: 50px">
                <input type="number" placeholder="Filter" />
              </div>
            </th>
            <th class="input-cell">
              <span class="table-head-label">Name</span>
              <div class="input">
                <input type="text" placeholder="Filter" />
              </div>
            </th>
            <th class="input-cell">
              <span class="table-head-label">Email</span>
              <div class="input">
                <input type="email" placeholder="Filter" />
              </div>
            </th>
            <th class="input-cell">
              <span class="table-head-label">Gender</span>
              <div class="input input-dropdown">
                <select>
                  <option value="All">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>jane@doe.com</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Vladimir Kharlampidi</td>
            <td>vladimir@google.com</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Jennifer Doe</td>
            <td>jennifer@doe.com</td>
            <td>Female</td>
          </tr>
        </tbody>
      </table>
    </div>
    <t4-block-title>Within card with title and actions</t4-block-title>
    <div class="data-table data-table-init card">
      <div class="card-header">
        <div class="data-table-title">Nutrition</div>
        <div class="data-table-actions">
          <t4-link
            icon-ios="t4:line_horizontal_3_decrease"
            icon-aurora="t4:line_horizontal_3_decrease"
            icon-md="material:sort"
          />
          <t4-link
            icon-ios="t4:ellipsis_vertical_circle"
            icon-aurora="t4:ellipsis_vertical_circle"
            icon-md="material:more_vert"
          />
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </th>
              <th class="label-cell">Dessert (100g serving)</th>
              <th class="numeric-cell">Calories</th>
              <th class="numeric-cell">Fat (g)</th>
              <th class="numeric-cell">Carbs</th>
              <th class="numeric-cell">Protein (g)</th>
              <th class="medium-only">
                <t4-icon
                  ios="t4:chat_bubble_text_fill"
                  aurora="t4:chat_bubble_text_fill"
                  md="material:message"
                />
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell">159</td>
              <td class="numeric-cell">6.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">4.0</td>
              <td class="medium-only">I like frozen yogurt</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Ice cream sandwich</td>
              <td class="numeric-cell">237</td>
              <td class="numeric-cell">9.0</td>
              <td class="numeric-cell">37</td>
              <td class="numeric-cell">4.4</td>
              <td class="medium-only">But like ice cream more</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Eclair</td>
              <td class="numeric-cell">262</td>
              <td class="numeric-cell">16.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">6.0</td>
              <td class="medium-only">Super tasty</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Cupcake</td>
              <td class="numeric-cell">305</td>
              <td class="numeric-cell">3.7</td>
              <td class="numeric-cell">67</td>
              <td class="numeric-cell">4.3</td>
              <td class="medium-only">Don't like it</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <t4-block-title>Sortable columns</t4-block-title>
    <div class="data-table data-table-init card">
      <div class="card-header">
        <div class="data-table-title">Nutrition</div>
        <div class="data-table-actions">
          <t4-link
            icon-ios="t4:line_horizontal_3_decrease"
            icon-aurora="t4:line_horizontal_3_decrease"
            icon-md="material:sort"
          />
          <t4-link
            icon-ios="t4:ellipsis_vertical_circle"
            icon-aurora="t4:ellipsis_vertical_circle"
            icon-md="material:more_vert"
          />
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </th>
              <th class="label-cell sortable-cell sortable-cell-active">Dessert (100g serving)</th>
              <th class="numeric-cell sortable-cell">Calories</th>
              <th class="numeric-cell sortable-cell">Fat (g)</th>
              <th class="numeric-cell sortable-cell">Carbs</th>
              <th class="numeric-cell sortable-cell">Protein (g)</th>
              <th class="medium-only">
                <t4-icon
                  ios="t4:chat_bubble_text_fill"
                  aurora="t4:chat_bubble_text_fill"
                  md="material:message"
                />
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell">159</td>
              <td class="numeric-cell">6.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">4.0</td>
              <td class="medium-only">I like frozen yogurt</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Ice cream sandwich</td>
              <td class="numeric-cell">237</td>
              <td class="numeric-cell">9.0</td>
              <td class="numeric-cell">37</td>
              <td class="numeric-cell">4.4</td>
              <td class="medium-only">But like ice cream more</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Eclair</td>
              <td class="numeric-cell">262</td>
              <td class="numeric-cell">16.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">6.0</td>
              <td class="medium-only">Super tasty</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Cupcake</td>
              <td class="numeric-cell">305</td>
              <td class="numeric-cell">3.7</td>
              <td class="numeric-cell">67</td>
              <td class="numeric-cell">4.3</td>
              <td class="medium-only">Don't like it</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <t4-block-title>With title and different actions on select</t4-block-title>
    <div class="data-table data-table-init card">
      <div class="card-header">
        <div class="data-table-header">
          <div class="data-table-title">Nutrition</div>
          <div class="data-table-actions">
            <t4-link
              icon-ios="t4:line_horizontal_3_decrease"
              icon-aurora="t4:line_horizontal_3_decrease"
              icon-md="material:sort"
            />
            <t4-link
              icon-ios="t4:ellipsis_vertical_circle"
              icon-aurora="t4:ellipsis_vertical_circle"
              icon-md="material:more_vert"
            />
          </div>
        </div>
        <div class="data-table-header-selected">
          <div class="data-table-title-selected">
            <span class="data-table-selected-count"></span> items selected
          </div>
          <div class="data-table-actions">
            <t4-link icon-ios="t4:trash" icon-aurora="t4:trash" icon-md="material:delete" />
            <t4-link
              icon-ios="t4:ellipsis_vertical_circle"
              icon-aurora="t4:ellipsis_vertical_circle"
              icon-md="material:more_vert"
            />
          </div>
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </th>
              <th class="label-cell">Dessert (100g serving)</th>
              <th class="numeric-cell">Calories</th>
              <th class="numeric-cell">Fat (g)</th>
              <th class="numeric-cell">Carbs</th>
              <th class="numeric-cell">Protein (g)</th>
              <th class="medium-only">
                <t4-icon
                  ios="t4:chat_bubble_text_fill"
                  aurora="t4:chat_bubble_text_fill"
                  md="material:message"
                />
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell">159</td>
              <td class="numeric-cell">6.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">4.0</td>
              <td class="medium-only">I like frozen yogurt</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Ice cream sandwich</td>
              <td class="numeric-cell">237</td>
              <td class="numeric-cell">9.0</td>
              <td class="numeric-cell">37</td>
              <td class="numeric-cell">4.4</td>
              <td class="medium-only">But like ice cream more</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Eclair</td>
              <td class="numeric-cell">262</td>
              <td class="numeric-cell">16.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">6.0</td>
              <td class="medium-only">Super tasty</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Cupcake</td>
              <td class="numeric-cell">305</td>
              <td class="numeric-cell">3.7</td>
              <td class="numeric-cell">67</td>
              <td class="numeric-cell">4.3</td>
              <td class="medium-only">Don't like it</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <t4-block-title>Alternate header with actions</t4-block-title>
    <div class="data-table data-table-init card">
      <div class="card-header">
        <div class="data-table-links"><a class="button">Add</a><a class="button">Remove</a></div>
        <div class="data-table-actions">
          <t4-link
            icon-ios="t4:line_horizontal_3_decrease"
            icon-aurora="t4:line_horizontal_3_decrease"
            icon-md="material:sort"
          />
          <t4-link
            icon-ios="t4:ellipsis_vertical_circle"
            icon-aurora="t4:ellipsis_vertical_circle"
            icon-md="material:more_vert"
          />
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </th>
              <th class="label-cell">Dessert (100g serving)</th>
              <th class="numeric-cell">Calories</th>
              <th class="numeric-cell">Fat (g)</th>
              <th class="numeric-cell">Carbs</th>
              <th class="numeric-cell">Protein (g)</th>
              <th class="medium-only">
                <t4-icon
                  ios="t4:chat_bubble_text_fill"
                  aurora="t4:chat_bubble_text_fill"
                  md="material:message"
                />
                Comments
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell">159</td>
              <td class="numeric-cell">6.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">4.0</td>
              <td class="medium-only">I like frozen yogurt</td>
              <td class="actions-cell">
                <t4-link
                  icon-ios="t4:square_pencil"
                  icon-aurora="t4:square_pencil"
                  icon-md="material:edit"
                />
                <t4-link icon-ios="t4:trash" icon-aurora="t4:trash" icon-md="material:delete" />
              </td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Ice cream sandwich</td>
              <td class="numeric-cell">237</td>
              <td class="numeric-cell">9.0</td>
              <td class="numeric-cell">37</td>
              <td class="numeric-cell">4.4</td>
              <td class="medium-only">But like ice cream more</td>
              <td class="actions-cell">
                <t4-link
                  icon-ios="t4:square_pencil"
                  icon-aurora="t4:square_pencil"
                  icon-md="material:edit"
                />
                <t4-link icon-ios="t4:trash" icon-aurora="t4:trash" icon-md="material:delete" />
              </td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Eclair</td>
              <td class="numeric-cell">262</td>
              <td class="numeric-cell">16.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">6.0</td>
              <td class="medium-only">Super tasty</td>
              <td class="actions-cell">
                <t4-link
                  icon-ios="t4:square_pencil"
                  icon-aurora="t4:square_pencil"
                  icon-md="material:edit"
                />
                <t4-link icon-ios="t4:trash" icon-aurora="t4:trash" icon-md="material:delete" />
              </td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Cupcake</td>
              <td class="numeric-cell">305</td>
              <td class="numeric-cell">3.7</td>
              <td class="numeric-cell">67</td>
              <td class="numeric-cell">4.3</td>
              <td class="medium-only">Don't like it</td>
              <td class="actions-cell">
                <t4-link
                  icon-ios="t4:square_pencil"
                  icon-aurora="t4:square_pencil"
                  icon-md="material:edit"
                />
                <t4-link icon-ios="t4:trash" icon-aurora="t4:trash" icon-md="material:delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <t4-block-title>Collapsible</t4-block-title>
    <div class="block-header">
      <p>The following table will be collapsed to kind of List View on small screens:</p>
    </div>
    <div class="card data-table data-table-collapsible data-table-init">
      <div class="card-header">
        <div class="data-table-title">Nutrition</div>
        <div class="data-table-actions">
          <t4-link
            icon-ios="t4:line_horizontal_3_decrease"
            icon-aurora="t4:line_horizontal_3_decrease"
            icon-md="material:sort"
          />
          <t4-link
            icon-ios="t4:ellipsis_vertical_circle"
            icon-aurora="t4:ellipsis_vertical_circle"
            icon-md="material:more_vert"
          />
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="label-cell">Dessert (100g serving)</th>
              <th class="numeric-cell">Calories</th>
              <th class="numeric-cell">Fat (g)</th>
              <th class="numeric-cell">Carbs</th>
              <th class="numeric-cell">Protein (g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell">159</td>
              <td class="numeric-cell">6.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">4.0</td>
            </tr>
            <tr>
              <td class="label-cell">Ice cream sandwich</td>
              <td class="numeric-cell">237</td>
              <td class="numeric-cell">9.0</td>
              <td class="numeric-cell">37</td>
              <td class="numeric-cell">4.4</td>
            </tr>
            <tr>
              <td class="label-cell">Eclair</td>
              <td class="numeric-cell">262</td>
              <td class="numeric-cell">16.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">6.0</td>
            </tr>
            <tr>
              <td class="label-cell">Cupcake</td>
              <td class="numeric-cell">305</td>
              <td class="numeric-cell">3.7</td>
              <td class="numeric-cell">67</td>
              <td class="numeric-cell">4.3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </t4-page>
</template>
<script>
import { t4Navbar, t4Page, t4BlockTitle, t4Link, t4Icon } from 'techno4-vue';

export default {
  components: {
    t4Navbar,
    t4Page,
    t4BlockTitle,
    t4Link,
    t4Icon,
  },
};
</script>
