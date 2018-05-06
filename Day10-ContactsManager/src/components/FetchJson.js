// @flow

import React, {Component, Fragment} from 'react';
import axios from 'axios';

type FetchJsonState = {
  [string]: mixed
}

type Props = {
  [string]: mixed | () => void
}

class FetchJson extends Component<FetchJsonState, Props> {
  state = { 
    url: null,
    data: null,
    isLoading: false,
    selectedIndex: 0
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: FetchJsonState) {
    if (prevState.url !== nextProps.url) {
      return {
        url: nextProps.url,
        data: null,
        isLoading: true,
        selectedIndex: 0,
      }
    }
    return null
  }

  _fetchAndUpdate = () => {
    const encodedURI = window.encodeURI(this.state.url)
    const promise = axios.get(encodedURI)
      promise
        .then(response => {
          this.setState(
            () => ({ data: response.data, isLoading: false })
          )
        })
        .catch(error => console.log(error))
  }

  componentDidMount() {
    this._fetchAndUpdate()
  }

  render() {
    return (
      <Fragment>
        {this.props.render(this.state)}
      </Fragment>
    );
  }
}

export default FetchJson;