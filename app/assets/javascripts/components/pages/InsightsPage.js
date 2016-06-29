import React from 'react';
import { Link } from 'react-router';
import Header from '../commons/Header';
import Navbar from '../commons/Navbar';
import Title from '../commons/Title';
import Card from '../cards/Card';
import Button from '../commons/Button';
import Footer from '../commons/Footer';

class DashboardsPage extends React.Component {

  componentDidMount() {
    this.props.getInsightsList();
    this.pageType = 2; // For page colors, 2 = blue
  }

  getContent() {
    if (!this.props.data) {
      return (
        <div>
          TODO: loading component
        </div>
      );
    }

    let items = [];
    this.props.data.forEach((item, index) => {
      items.push(
        <Card borderType={4} key={`insight-item-${index}`}>
          <Link to={`/insights/${item.slug}`}>
            <Title type="content">
              {item.title}
            </Title>
          </Link>
          <p className="content">
            {item.summary}
          </p>
          <a href="#">
            <img
              src={gon.assets[item.partner.logo]}
              className="logo"
              alt={item.partner.name}
            />
          </a>
        </Card>
      );
    });

    return (
      <div className="wrapper">
        <div className="cards">
          {items}
          <div className="button-container">
            <Button borderType={4}>Show more results</Button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let content = this.getContent();
    return (
      <div className="l-dashboards">
        <Header type="small">
          <Navbar currentPage={this.props.currentPage} />
          <Title inverse center borderType={this.pageType} type="page">
            Insights
          </Title>
        </Header>

        {content}

        <div className="other-links">
          <div className="wrapper">
            <div className="cards-container">
              <div className="card -map">
                <Title inverse center>Data on the map</Title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <Link to="/data">
                  <Button color={1}>Explore the map</Button>
                </Link>
              </div>
              <div className="card -image">
                <Title inverse center>Dashboards</Title>
                <p>
                  Integer id placerat ligula, eget consequat sapien. Duis nec
                  neque scelerisque
                </p>
                <Link to="/dashboards">
                  <Button color={1}>Explore the dashboards</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pre-header">
          <div className="wrapper">
            <div className="content -centered">
              <div>
                <Title inverse center>
                  Do you have relevant data about climate?
                </Title>
                <a href="#" className="button-container">
                  <Button inverse borderType={this.pageType}>
                    Create your dashboard
                  </Button>
                </a>
              </div>
              <div>
                <Title inverse center>
                  Would you like to improve a dashboard?
                </Title>
                <Link to="/contact" className="button-container">
                  <Button inverse borderType={this.pageType}>
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer pageType={this.pageType} />
      </div>
    );
  }
}

DashboardsPage.propTypes = {
  /**
   * Define the route path (from the router)
   */
  currentPage: React.PropTypes.string,
  /**
   * Define function to get the insights list
   */
  getInsightsList: React.PropTypes.func.isRequired,
  /**
   * Define insights list data
   */
  data: React.PropTypes.array,
};

export default DashboardsPage;
