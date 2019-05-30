import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getLeads } from "../../actions/leads";
import Searcher from "./Searcher";
import LeadList from "./LeadList";

export class Leads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: ""
    };
    this.props.getLeads();
  }

  componentWillMount() {
    this.props.getLeads();
  }
  componentDidMount() {
    this.setState({ data: this.props.leads });
  }

  search(e) {
    this.state.searchTerm = e.target.value;
    let regexp = new RegExp(e.target.value, "i");
    let matching = this.props.leads.map(elem => {
      elem.match = regexp.test(elem.name);
      return elem;
    });
    console.log(matching);
    this.setState({
      data: matching
    });
  }

  render() {
    // const leads = this.props.leads.map(lead => {
    //   return (
    //     <LeadItem
    //       key={lead.id}
    //       id={lead.id}
    //       documentCode={lead.documentCode}
    //       documentStageCode={lead.documentStageCode}
    //       name={lead.name}
    //       email={lead.email}
    //       message={lead.message}
    //       fileDocument={lead.fileDocument}
    //       created_at={lead.created_at.slice(0, -17)}
    //       update={this.updateData.bind(this)}
    //     />
    //   );
    // });
    return (
      <Fragment>
        <h2>Мои записки</h2>
        <Searcher
          text={this.state.searchTerm}
          search={this.search.bind(this)}
        />
        <LeadList leads={this.props.leads} />
      </Fragment>
    );
  }
}
//map that state to props of component
//state.leads - we want leads reducer
//.leads - part, which we need (from another file - insides)
const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getLeads }
)(Leads);
