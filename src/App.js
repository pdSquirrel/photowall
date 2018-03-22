import React, { Component } from 'react';
import Title from './components/Title';
import PhotoWall from './components/PhotoWall';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.removePhoto = this.removePhoto.bind(this);
    console.log('constructor');
  }

  removePhoto(postRemoved) {
    this.setState(state => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }));
  }

  componentDidMount() {
    const posts = SimulateFetchFromDatabase()
    this.setState({
      posts: posts
    });
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <Title title={'Photowall'} />
        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
      </div>
    );
  }
}

const SimulateFetchFromDatabase = () => {
  return [
    {
      id: '0',
      description: 'beautiful landscape',
      imageLink:
        'https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg' +
        '3919321_1443393332_n.jpg'
    },
    {
      id: '1',
      description: 'Aliens???',
      imageLink:
        'https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=' +
        '08323785_735653395_n.jpg'
    },
    {
      id: '2',
      description: 'On a vacation!',
      imageLink:
        'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg'
    }
  ]
}

export default App;
