import { Tabs, Button } from 'antd';
import React from 'react';

const { TabPane } = Tabs;

class CacheMenu extends React.Component {
  newTabIndex: number;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey: any) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey: any, action: React.Key) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = (targetKey: any) => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane: { key: any; }, i: number) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter((pane: { key: any; }) => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.add}>ADD</Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map((pane: { title: React.ReactNode; key: string | number | null | undefined; content: React.ReactNode; }) => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default CacheMenu