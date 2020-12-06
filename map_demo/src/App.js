import { Layout, Menu } from 'antd';
import routes from './routes';
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            {
              routes.map((route, key) => {
                return <Menu.Item key={key} index={route.path}><Link to={route.path} key={key}>{route.name}</Link></Menu.Item>;
              })
            }
          </Menu>
        </Header>
        <Content>
          <Switch>
            {routes.map((route, key) => {
              if (route.exact) {
                return (
                  <Route
                    key={key}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  >
                  </Route>
                );
              }
              else {
                return (
                  <Route
                    key={key}
                    path={route.path}
                    component={(props) => {
                      return (
                        <Suspense fallback={<div>Loading</div>}><route.component key={key} {...props} routes={route.routes} /></Suspense>
                      );
                    }}
                  >
                  </Route>
                );
              }

            })}
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;

