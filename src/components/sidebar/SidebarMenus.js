import {faChartBar, faClock, faLayerGroup, faRulerCombined, faTasks} from '@fortawesome/free-solid-svg-icons'
import React, {Component} from 'react'
import {withTranslation} from 'react-i18next'
import {connect} from 'react-redux'
import {
  ACTION_CHANGE_DATE_FILTER_MODE,
  ACTION_CHANGE_GRAPH_MODE,
  ACTION_CHANGE_GRAPH_SCALE,
  ACTION_CHANGE_METRIC_GRAPH_VISIBILITY,
  ACTION_CHANGE_VIEW_MODE,
  DATE_FILTER,
  GRAPH_MODE,
  GRAPH_SCALE,
  VIEW_MODE,
} from '../../global/constants'
import {action} from '../../global/util'
import {graphMetricsOrder} from '../../pages/overview/graph/Graphs'
import {SidebarMenuSet} from './SidebarMenuSet'

class SidebarMenusComponent extends Component {
  viewModeMenu = {
    labelPlaceholder: 'header:view_mode_label',
    icon: faLayerGroup,
    activeKeys: [],
    subMenu: Object.values(VIEW_MODE).map(key => ({
      labelPlaceholder: `header:view_mode_${key}`,
      key: key,
      action: () => action(ACTION_CHANGE_VIEW_MODE, {viewMode: key}),
    })),
  }

  intervalsMenu = {
    labelPlaceholder: 'intervals:button_label',
    icon: faClock,
    activeKeys: [],
    subMenu: Object.values(DATE_FILTER).map(key => ({
      labelPlaceholder: `intervals:${key}`,
      key: key,
      action: () => action(ACTION_CHANGE_DATE_FILTER_MODE, {filterMode: key}),
    })),
  }

  graphModeMenu = {
    labelPlaceholder: 'header:graph_mode_label',
    icon: faChartBar,
    activeKeys: [],
    subMenu: Object.values(GRAPH_MODE).map(key => ({
      labelPlaceholder: `header:graph_mode_${key}`,
      key: key,
      action: () => action(ACTION_CHANGE_GRAPH_MODE, {graphMode: key}),
    })),
  }

  graphScaleMenu = {
    labelPlaceholder: 'header:graph_scale_label',
    icon: faRulerCombined,
    activeKeys: [],
    subMenu: Object.values(GRAPH_SCALE).map(key => ({
      labelPlaceholder: `header:graph_scale_${key}`,
      key: key,
      action: () => action(ACTION_CHANGE_GRAPH_SCALE, {graphScale: key}),
    })),
  }

  graphMetricsMenu = {
    labelPlaceholder: 'header:graph_metrics_label',
    icon: faTasks,
    activeKeys: [],
    subMenu: ['all', 'none', ...graphMetricsOrder].map(key => ({
      labelPlaceholder: `header:metrics_${key}`,
      key: key,
      action: () => action(ACTION_CHANGE_METRIC_GRAPH_VISIBILITY, {metric: key}),
    })),
  }

  render() {
    this.viewModeMenu.activeKeys = [this.props.overview.viewMode]
    this.graphModeMenu.activeKeys = [this.props.graphOverview.graphMode]
    this.graphScaleMenu.activeKeys = [this.props.graphOverview.graphScale]
    this.graphMetricsMenu.activeKeys = [...this.props.graphOverview.metricsVisible]

    return (
      <>
        <h5 className="app-sidebar__heading">Menu</h5>

        <div className="sidebar-menu vertical-nav-menu">
          <ul className="sidebar-menu-container">
            <SidebarMenuSet menuData={this.intervalsMenu} />
            <SidebarMenuSet menuData={this.viewModeMenu} />
            <SidebarMenuSet menuData={this.graphMetricsMenu} />
            <SidebarMenuSet menuData={this.graphModeMenu} />
            <SidebarMenuSet menuData={this.graphScaleMenu} />
          </ul>
        </div>
      </>
    )
  }
}

const stateToProps = state => ({
  overview: state.overview,
  graphOverview: state.graphOverview,
})

const dispatchToProps = {}

export const SidebarMenus = connect(stateToProps, dispatchToProps)(withTranslation()(SidebarMenusComponent))