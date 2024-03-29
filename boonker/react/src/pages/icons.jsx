import React from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  Tab,
  Row,
  Col,
  BlockHeader,
  Segmented,
  Button,
  Icon,
} from 'techno4-react';

const t4Icons =
  'cursor_rays wand_stars bed_double_fill arrow_down_doc_fill chat_bubble_text exclamationmark_square_fill xmark sort_down checkmark_shield cloud money_rubl_circle shift chart_bar light_max videocam_fill hammer_fill light_max sort_up folder_badge_minus shield_lefthalf_fill moon_zzz_fill search_circle_fill music_albums_fill hifispeaker_fill suit_diamond doc_person_fill location tuningfork arrow_left_square_fill arrowtriangle_right_circle_fill lasso pin_slash arrow_uturn_right_circle device_phone_landscape gauge_badge_plus qrcode plus_slash_minus arrow_left_circle hand_thumbsdown capslock_fill map_pin_ellipse house_alt_fill plusminus_circle arrow_up_left_square rectangle_3_offgrid bed_double_fill arrow_down_right_arrow_up_left plus_square_fill_on_square_fill chevron_down_square arrow_uturn_left_circle_fill trash_slash_fill goforward_10 logo_twitter arrow_down_circle_fill bell_fill lock_circle_fill rectangle_stack_fill arrow_merge gauge_badge_minus text_cursor arrow_up_left arrowshape_turn_up_left_2 speaker_3_fill umbrella house hand_point_left_fill bolt_slash_fill arrow_up_to_line repeat arrow_up_right_diamond bag_fill_badge_plus selection_pin_in_out lock_shield arrow_right_arrow_left_circle gobackward_60 square_arrow_up_on_square_fill staroflife_fill graph_circle circle_lefthalf_fill text_badge_checkmark cloud_sleet_fill rocket square_stack_3d_up_slash phone_down_circle_fill arrow_left_circle_fill zzz cloud_moon_rain timelapse folder_badge_plus lessthan doc_on_clipboard_fill sun_min rectangle_3_offgrid device_laptop control folder_fill_badge_plus arrow_clockwise forward_end_fill person_badge_minus minus_rectangle'.split(
    ' ',
  );

const mdIcons =
  'translate child_friendly movie screen_lock_landscape switch_camera live_tv cast_connected network_wifi access_alarm bubble_chart airline_seat_flat_angled format_align_center speaker_notes brightness_low query_builder edit_location replay_30 mail_outline cloud_queue filter_none brightness_high cloud_download edit collections looks_one airline_seat_recline_normal get_app format_strikethrough hdr_weak camera_front filter_center_focus trending_flat vpn_key call_missed_outgoing remove_shopping_cart tablet_android play_circle_outline directions_railway dashboard network_wifi switch_video ac_unit error pool bluetooth_audio pageview arrow_drop_down_circle kitchen weekend vibration error airport_shuttle date_range zoom_out panorama_wide_angle restore fast_rewind replay_5 attach_money check_box disc_full looks_3 personal_video crop stay_current_portrait cast_connected navigation portrait attach_file crop sentiment_satisfied phonelink_erase drive_eta panorama_fish_eye brightness_6 airline_seat_legroom_reduced bookmark_border live_tv folder_special speaker assignment_return add_shopping_cart directions_transit airplay brightness_auto border_vertical gif layers_clear fast_forward laptop_windows settings_input_component cancel person_pin_circle audiotrack inbox access_alarm crop format_indent_decrease accessible wrap_text'.split(
    ' ',
  );

export default () => (
  <Page>
    <Navbar title="Icons" backLink="Back"></Navbar>
    <BlockTitle>Scroll bottom</BlockTitle>
    <Block strong>
      <p>
        techno4 comes with the premium and free{' '}
        <a href="https://techno4.io/icons/" className="external" target="_blank">
          techno4 Icons
        </a>{' '}
        iOS-icons font developed specially to be used with iOS theme of techno4. As for Material
        theme we recommend to use great-designed{' '}
        <a href="https://material.io/icons/" className="external" target="_blank">
          Material Icons
        </a>{' '}
        font. Both of these fonts use a typographic feature called{' '}
        <a
          href="http://alistapart.com/article/the-era-of-symbol-fonts"
          className="external"
          target="_blank"
        >
          ligatures
        </a>
        . It’s easy to incorporate icons into your app. Here’s a small example:
      </p>
      <p>
        <code>&lt;i class="t4-icons"&gt;house&lt;/i&gt;</code> - <i className="t4-icons">house</i>
      </p>
      <p>
        <code>&lt;i class="material-icons"&gt;home&lt;/i&gt;</code> -{' '}
        <i className="material-icons">home</i>
      </p>
      <p>
        <a
          href="http://alistapart.com/article/the-era-of-symbol-fonts"
          className="external"
          target="_blank"
        >
          Ligatures
        </a>{' '}
        allow rendering of an icon glyph simply by using its textual name. The replacement is done
        automatically by the web browser and provides more readable code than the equivalent numeric
        character reference.
      </p>
    </Block>
    <BlockHeader>
      <Segmented strong>
        <Button tabLink="#tab-t4" tabLinkActive>
          t4 Icons
        </Button>
        <Button tabLink="#tab-md">Material Icons</Button>
      </Segmented>
    </BlockHeader>
    <Block strong className="tabs">
      <Tab id="tab-t4" tabActive>
        <Row>
          {t4Icons.map((icon, index) => (
            <Col key={index} width="33" medium="15" className="demo-icon">
              <div className="demo-icon-icon">
                <Icon t4={icon} />
              </div>
              <div className="demo-icon-name">{icon}</div>
            </Col>
          ))}
        </Row>
      </Tab>
      <Tab id="tab-md">
        <Row>
          {mdIcons.map((icon, index) => (
            <Col key={index} width="33" medium="15" className="demo-icon">
              <div className="demo-icon-icon">
                <Icon material={icon} />
              </div>
              <div className="demo-icon-name">{icon}</div>
            </Col>
          ))}
        </Row>
      </Tab>
    </Block>
  </Page>
);
