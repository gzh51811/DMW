import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Home from './pages/home/Home.jsx'
import Sort from './pages/sort/Sort.jsx'
import ShoppingCart from './pages/shoppingCart/ShoppingCart.jsx'
import Me from './pages/me/Me.jsx'



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
        };
    }

    render() {
        return (
                <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        tabBarPosition="bottom"
                        hidden={this.state.hidden}
                        prerenderingSiblingsNumber={0}
                    >
                        <TabBar.Item
                            title="Life"
                            key="Life"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url('+require('./assets/icon/home.svg')+') center center /  24px 24px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url('+require('./assets/icon/home.svg')+') center center /  24px 24px no-repeat'
                            }}
                            />
                            }
                            selected={this.state.selectedTab === 'blueTab'}
                            // badge={1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'blueTab',
                                });
                            }}
                            data-seed="logId"
                        >
                            <Home />
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="Koubei"
                            key="Koubei"
                            badge={'new'}
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'redTab',
                                });
                            }}
                            data-seed="logId1"
                        >
                        <Sort />
                            {/* {this.renderContent('Koubei')} */}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="Friend"
                            key="Friend"
                            dot
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'greenTab',
                                });
                            }}
                        >
                        <ShoppingCart />
                            {/* {this.renderContent('Friend')} */}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                            title="My"
                            key="my"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'yellowTab',
                                });
                            }}
                        >
                        <Me />
                            {/* {this.renderContent('My')} */}
                        </TabBar.Item>
                    </TabBar>
                </div>
        );
    }
}

export default App;
