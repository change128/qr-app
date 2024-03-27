import React from 'react';

import { Popover, QRCode } from 'antd';

class ErrorCatch extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return <>扫码预览失败</>;
    }
    return this.props.children;
  }
}

const HomePage: React.FC = () => {
  const leg = 2000;
  let str = '';
  for (let i = 0; i < leg; i++) {
    str += `好`;
  }
  return (
    <div>
      <ErrorCatch>
        <Popover
          trigger={['click', 'hover']}
          placement="left"
          content={<QRCode value={str} size={200} />}
        >
          <div style={{ width: 'min-content' }}>
            <QRCode value={str} size={150} />
            点击查看预览二维码
          </div>
        </Popover>
      </ErrorCatch>
    </div>
  );
};

export default HomePage;
