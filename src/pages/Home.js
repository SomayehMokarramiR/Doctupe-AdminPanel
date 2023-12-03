import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import  axios  from "axios";
import http from '../@core/interceptor'
import { useEffect } from "react";
import {useQuery} from 'react-query'

const Home = () => {



  const getCourseList = async () =>{
    const result = await http.get(`/Course/CourseList?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=Expire&Query`)
    return result;
  }

  const {data , status, refetch} = useQuery('courseQuery'  , getCourseList  )

  
  status === 'success' && console.log(data);




  // const getUserList = async()=>{
  //   const res =await http.get('/Course/CourseList?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=Expire&Query')
  //   console.log(res);
  // }

  // useEffect(() =>{
  //   getUserList()
  // },[])


  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Kick start your project 🚀</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>All the best for your new project.</CardText>
          <CardText>
            Please make sure to read our{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/"
              target="_blank"
            >
              Template Documentation
            </CardLink>{" "}
            to understand where to go from here and how to use our template.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Want to integrate JWT? 🔒</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            We carefully crafted JWT flow so you can implement JWT with ease and
            with minimum efforts.
          </CardText>
          <CardText>
            Please read our{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/auth"
              target="_blank"
            >
              JWT Documentation
            </CardLink>{" "}
            to get more out of JWT authentication.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
