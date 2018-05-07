// @flow
/* eslint-disable */

import React, {Component, Fragment} from 'react';
import axios from 'axios';

type OrgMember = {
  [string]: mixed,
};

type State = {
  url: string,
  data: ?Array<OrgMember>,
  isLoading: boolean,
};

type Props = {
  [string]: mixed,
};

class FetchJson extends Component<State, Props> {
  state = {
    url: null,
    data: null,
    isLoading: false,
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (prevState.url !== nextProps.url) {
      return {
        url: nextProps.url,
        data: null,
        isLoading: true,
      };
    }
    return null;
  }

  _fetchAndUpdate = () => {
    const encodedURI = window.encodeURI(this.state.url);
    const promise = axios.get(encodedURI);
    promise
      .then((response) => {
        this.setState(
          () => ({data: response.data, isLoading: false})
        );
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this._fetchAndUpdate();
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
