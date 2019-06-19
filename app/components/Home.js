// @flow
import React, { Component } from 'react';
import * as $ from 'jquery';
import './Home.global.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  componentDidMount() {
    jQuery(($) => {
      const panelList = $('#draggablePanelList');


      panelList.sortable({
          revert: '300',

              // Only make the .panel-heading child elements support dragging.
              // Omit this to make then entire <li>...</li> draggable.
              // handle: '.panel-heading',
              start (event, ui) {
                  ui.item.addClass('tilt');
                  tilt_direction(ui.item);
              },
              stop (event, ui) {
                  ui.item.removeClass('tilt');
                  tilt_direction(ui.item);
              },
              update() {
                  $('.panel', panelList).each((index, elem) => {
                      var $listItem = $(elem),
                          newIndex = $listItem.index();

                      // Persist the new indices.
                  });
              }
          });
      });

      // Monitor tilt direction and switch between classes accordingly
      function tilt_direction(item) {
          let left_pos = item.position().left;


const move_handler = function (e) {
                  if (e.pageX >= left_pos) {
                      item.addClass("right");
                      item.removeClass("left");
                  } else {
                      item.addClass("left");
                      item.removeClass("right");
                  }
                  left_pos = e.pageX;
              };
          $("html").bind("mousemove", move_handler);
          item.data("move_handler", move_handler);
      };
  }

  render() {
    return (
      <div className="container-fluid dashboard">
        <div className="row bottom30" id="draggablePanelList">
          <div className="col-sm-3">
            <div className="panel">
              <div className="panel-heading">&nbsp;</div>
              <div className="panel-body">
                <div className="number">0</div>
              </div>
              <div className="panel-footer">
                <div className="title">To-dos</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="panel {alert}">
              <div className="panel-heading">&nbsp;</div>
              <div className="panel-body {alert}">
                <div className="number">5 days</div>
              </div>
              <div className="panel-footer">
                <div className="title">Closest to Deadline</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="panel">
              <div className="panel-heading warning">&nbsp;</div>
              <div className="panel-body">
                <div className="number">5</div>
              </div>
              <div className="panel-footer">
                <div className="title">Waiting for Review</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="panel">
              <div className="panel-heading">&nbsp;</div>
              <div className="panel-body">
                <div className="number">1</div>
              </div>
              <div className="panel-footer">
                <div className="title">Unchecked File(s)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row bottom30">
          <div className="col-sm-6">
          <div className="perspective">
            <div className="note">
              <h1>Sup, buddy?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aut quas pariatur hic facere odit necessitatibus earum ipsa sed voluptatem sapiente officia similique! Cum unde magni vel repellat minima corporis.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Draggable dashboard style: https://codepen.io/tezjnr/pen/QEywdx
