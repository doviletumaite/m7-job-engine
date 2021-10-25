import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import JobResult from "./JobResult";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { connect, useDispatch,useSelector } from "react-redux";
import { fetchJobs } from "../store/actions";


// const mapDispatchToProps = (dispatch) => ({
//     fetchJobs: (baseEndpoint, query) => dispatch(fetchJobs(baseEndpoint, query)),
//   });

const MainSearch = () => {
 const [query, setQuery] = useState("")
 const [jobs, setJobs] = useState([])
    // state = {
    //     query: '',
    //     jobs: []
    // }
    const jobsData = useSelector(state => state.jobs.elements)
  const dispatch = useDispatch()
   const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

 console.log("jobs", jobsData)
  const  handleChange = (e) => {
        // this.setState({ query: e.target.value })
        setQuery(e.target.value)
    }
     
    //  getJobs = async () => {
    //   try {
    //      const dataJobs =  await fetch(this.baseEndpoint+ '&limit=20')
    //     const response = dataJobs.json()
    //     if (response.ok){
    //      const {arrayOfJobs} = response.data
    //      this.setState({ jobs: arrayOfJobs })
    //      console.log("arrayOfJobs",arrayOfJobs)
    //   } } catch (error) {
    //       console.log(error)
    //   }
    // }
   
   

    // handleSubmit = async (e) => {
    //     e.preventDefault()

    //     const response = await fetch(this.baseEndpoint + this.state.query + '&limit=20')

    //     if (!response.ok) {
    //         alert('Error fetching results')
    //         return
    //     }
    //     const { data } = await response.json()
    //     this.setState({ jobs: data })
    // }
  const  handleSubmit = async (e) => {
        e.preventDefault();
        // this.props.fetchJobs(this.baseEndpoint, this.state.query);
        dispatch(fetchJobs(baseEndpoint,query))
      };

//  componentDidMount = () =>{
//      console.log()
//      this.getJobs()
//     }

        return (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1> Jobs Engine</h1>
                        <Link to="/favourites" className="btn btn-primary">
              Favourites
            </Link>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
                        </Form>
                    </Col>
                    <Col xs={10} className='mx-auto mb-5'>
                    {jobsData.map((jobData) => (
              <JobResult key={uniqid()} data={jobData} />
            ))}
                    </Col>
                </Row>
            </Container>
        )
    
}
export default MainSearch;