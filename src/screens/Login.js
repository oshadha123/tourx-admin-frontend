import React, {
  useRef,
  useState,
  useEffect,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import { BASE_URL } from "../config";
import axios from "axios";
import "../styles.css";

function LoginForm() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [userToken, setUserToken] = useState(null);
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/login`, { email, password })
      .then(async (res) => {
        localStorage.setItem("token", res.data.token);
        setSuccess(res.data.success);

        // if (res.data.success == 1) {
        //   setUserInfo(userInfo);
        //   setUserId(userInfo.userId);
        //   setUserToken(res.data.token);
        //   navigate("/");
        //   console.log(res);
        // }
      })
      .catch((err) => {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus();
      });
  };

  const styles = {
    container: {
      backgroundImage: `url(${"https://res.cloudinary.com/tourx/image/upload/v1662577628/2204_w017_n001_443a_p30_443_ye0thy.jpg"})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    },
  };

  const cardStyles = {
    container: {
      display: "flex",
      boxShadow: "0 0 3px 2px #cec7c759",
      alignItems: "center",
      padding: 20,
      borderRadius: 20,
      opacity: 0.8,
    },
  };

  return (
    <>
      {success ? 
        navigate("/Dashboard")
       : (
        <section>
            <Form.Text
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </Form.Text>
            <div style={styles.container}>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "25rem",
                }}
              >
                <Card style={cardStyles.container}>
                  <img
                    src={
                      "https://res.cloudinary.com/tourx/image/upload/v1662298253/tourx_equkdk.png"
                    }
                    style={{ height: "auto", width: "10rem" }}
                    alt="Logo"
                  />
                  <Form onSubmit={handleSubmit}>
                    <h4 style={{ textAlign: "center" }}>Login</h4>
                    {/* {error != "" ? <div className="error">{error}</div> : ""} */}

                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="email">Email:</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        id="email"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="password">Password:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                      />
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group> */}

                    <Button className="mb-3" variant="primary" type="submit">
                      Login
                    </Button>
                  </Form>
                </Card>
              </div>
            </div>
        </section>
      )}
    </>
  );
}export default LoginForm;