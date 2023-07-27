import React from "react";
import {
  Form,
  Button,
  FormControl,
  FormGroup,
  FormCheck,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const schema = yup.object({
  firstName: yup.string().min(3).max(15).required("FirstName is Mandatory"),
  lastName: yup.string().required("Please enter your Secondname"),
  email: yup.string().email().required("Please enter your email address"),
  gender: yup.string().required("Please select Gender"),
  courses: yup.array().required("Select anyone of the courses"),
  password: yup.string().min(4).required("Set your password"),
  confirmPassword: yup
    .string()
    .required("Please reenter your password")
    .oneOf([yup.ref("password")],"password must be match"),
  city: yup.string().required("Please choose city from the options"),
});
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((x) => console.log(x));

function Yupform() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (sessionStorage.getItem("Yupdata") === null) {
      sessionStorage.setItem("Yupdata", JSON.stringify([]));
    }
  }, []);
  const onSubmit = (data:any) => {
    console.log(data);
    const sessionValue =sessionStorage.getItem("Yupdata");
    const array:any[] =sessionValue ? JSON.parse(sessionValue):[];
    array.push(data);
    sessionStorage.setItem("Yupdata", JSON.stringify(array));
    Navigate("/TableYup");
  };

  console.log();
  return (
    <>
      <div className="form container col-sm-5">
        <h1 className="mb-3">Form validation with Yup concept</h1>
        <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
          <FormGroup className="mb-3 row">
            <div className="col-sm-6">
              <Form.Label>Firstname</Form.Label>
              <FormControl
                type="text"
                {...register("firstName")}
                placeholder="FirstName.."
              ></FormControl>
              <p>{errors.firstName?.message}</p>
            </div>
            <div className="col-sm-6">
              <Form.Label>Lastname</Form.Label>
              <FormControl
                type="text"
                {...register("lastName")}
                placeholder="Lastname.."
              ></FormControl>
              <p>{errors.lastName?.message}</p>
            </div>
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <FormControl
              type="email"
              {...register("email")}
              placeholder="abc@gmail.com"
            ></FormControl>
            <p>{errors.email?.message}</p>
          </FormGroup>
          <FormGroup className="mb-3 gender" style={{display:"flex",justifyContent:"center"}}>
            <Form.Label>Gender :</Form.Label>
            <div style={{display:"flex"}}>
            <div style={{display:"flex"}}>
              <FormCheck
                type="radio"
                {...register("gender")}
                name="gender"
                value="male"
              ></FormCheck><Form.Label>Male</Form.Label>
            </div>
            <div style={{display:"flex"}}>
              <FormCheck
                type="radio"
                {...register("gender")}
                name="gender"
                value="female"
              ></FormCheck><Form.Label>Female</Form.Label>
            </div>
            </div>
            <p>{errors.gender?.message}</p>
          </FormGroup>
          <FormGroup className="mb-3" style={{display:"flex",justifyContent:"center"}}>
            <Form.Label>Select courses</Form.Label>
           <div style={{display:"flex"}}>
            <div className="courses" style={{display:"flex"}}>
              <div style={{display:"flex"}}>
                {" "}
                <FormCheck
                  type="checkbox"
                  {...register("courses")}
                  name="courses"
                  value="HTML"
                ></FormCheck>
                <Form.Label>HTML</Form.Label>
              </div>
              <div style={{display:"flex"}}>
                <FormCheck
                  type="checkbox"
                  {...register("courses")}
                  name="courses"
                  value="CSS"
                ></FormCheck>
                <Form.Label>CSS</Form.Label>
              </div>
              <div style={{display:"flex"}}>
                {" "}
                <FormCheck
                  type="checkbox"
                  {...register("courses")}
                  name="courses"
                  value="Bootstrap"
                ></FormCheck>
                <Form.Label>Bootstrap</Form.Label>
              </div>
              <div style={{display:"flex"}}>
                {" "}
                <FormCheck
                  type="checkbox"
                  {...register("courses")}
                  name="courses"
                  value="Javascript"
                ></FormCheck>
                <Form.Label>Javascript</Form.Label>
              </div>
              <div style={{display:"flex"}}>
                <FormCheck
                  type="checkbox"
                  {...register("courses")}
                  name="courses"
                  value="React"
                ></FormCheck>
                <Form.Label>React</Form.Label>
              </div>
              <div style={{display:"flex"}}>
                <FormCheck
                  type="checkbox"
                  {...register("courses")}
                  name="courses"
                  value="Node"
                ></FormCheck>
                <Form.Label>Node</Form.Label>
              </div>
            </div>
            </div>
            <p>{errors.courses?.message}</p>
          </FormGroup>
          <FormGroup className="mb-3 password row">
            <div className="col-sm-6">
              <Form.Label>Password</Form.Label>
              <FormControl
                type="password"
                {...register("password")}
              ></FormControl>
              <p>{errors.password?.message}</p>
            </div>
            <div className="col-sm-6">
              <Form.Label>Confirm Password</Form.Label>
              <FormControl
                type="password"
                {...register("confirmPassword")}
              ></FormControl>
              <p>{errors.confirmPassword?.message}</p>
            </div>
          </FormGroup>
          <FormGroup className="mb-3" controlId="Select">
            <Form.Label>Select Native</Form.Label>
            <Form.Select aria-label="Select cities" {...register("city")}>
              <option value="">--Select your City--</option>
              <option value="Tirunelveli">Tirunelveli</option>
              <option value="Madurai">Madurai</option>
              <option value="Kanyakumari">Kanyakumari</option>
              <option value="Chennai">Chennai</option>
              <option value="Tiruchi">Tiruchi</option>
              <option value="Vellore">Vellore</option>
              <option>thanjavur</option>
            </Form.Select>
            <p>{errors.city?.message}</p>
          </FormGroup>
          <Button type="submit" className="btn-block">
            submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Yupform;