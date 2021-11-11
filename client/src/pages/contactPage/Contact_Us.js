// import React, { useState } from "react";
// import {
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   TextField,
//   Button,
// } from "@material-ui/core";
// import "./Contact.css";
// import axios from "axios";

// function Contact_Us() {
//   const [input, setInput] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });
//   function handleChange(event) {
//     const { name, value } = event.target;
//     setInput((prevInput) => {
//       return {
//         ...prevInput,
//         [name]: value,
//       };
//     });
//   }
//   function handleOnClick(event) {
//     event.preventDefault();
//     const contactInfo = {
//       firstName: input.firstName,
//       lastName: input.lastName,
//       email: input.email,
//       message: input.message,
//     };
//     console.log(contactInfo);
//     axios.post("http://localhost:5000/contact_us", contactInfo);
//   }

//   return (
//     <section>
//       <div className="body">
//         <h2
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           Contact Us
//         </h2>
//         <p style={{ fontSize: "20px", textAlign: "center" }}>
//           Easy Park is a modern day solution for managing apartments parking.
//           Please feel free to contact us about any questions you have about us.
//         </p>

//         <Card
//           style={{ maxWidth: 600, margin: "30px auto", padding: "10px 5px" }}
//         >
//           <CardContent>
//             <Typography gutterBottom variant="h5">
//               Contact Us
//             </Typography>
//             <Typography
//               gutterBottom
//               variant="body"
//               color="textSecondary"
//               component="p"
//             >
//               Fill out the form and we will get back to you
//             </Typography>
//             <form>
//               <Grid container spacing={2}>
//                 <Grid xs={12} sm={6} item>
//                   <TextField
//                     label="First Name"
//                     placeholder="Enter first Name"
//                     variant="outlined"
//                     fullWidth
//                     required
//                     name="firstName"
//                     value={input.firstName}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid xs={12} sm={6} item>
//                   <TextField
//                     label="Last Name"
//                     placeholder="Enter Last Name"
//                     variant="outlined"
//                     fullWidth
//                     required
//                     name="lastName"
//                     value={input.lastName}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid xs={12} item>
//                   <TextField
//                     type="email"
//                     label="Email"
//                     placeholder="Enter your email"
//                     variant="outlined"
//                     fullWidth
//                     required
//                     name="email"
//                     value={input.email}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid xs={12} item>
//                   <TextField
//                     label="Message/Query"
//                     multiline
//                     rows={9}
//                     placeholder="Enter your message or queries"
//                     variant="outlined"
//                     fullWidth
//                     required
//                     name="message"
//                     value={input.message}
//                     onChange={handleChange}
//                   />
//                 </Grid>
//                 <Grid xs={12} item>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     onClick={handleOnClick}
//                   >
//                     Submit
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//       {/* <div class="container">
//         <div class="row">
//           <div class="col-lg-4">
//             <div
//               class="nav nav-pills faq-nav"
//               id="faq-tabs"
//               role="tablist"
//               aria-orientation="vertical"
//             >
//               <a
//                 href="#tab1"
//                 class="nav-link active"
//                 data-toggle="pill"
//                 role="tab"
//                 aria-controls="tab1"
//                 aria-selected="true"
//               >
//                 <i class="mdi mdi-help-circle"></i> Frequently Asked Questions
//               </a>
//             </div>
//             <div class="col-lg-8">
//               <div class="tab-content" id="faq-tab-content">
//                 <div
//                   class="tab-pane show active"
//                   id="tab1"
//                   role="tabpanel"
//                   aria-labelledby="tab1"
//                 >
//                   <div class="accordion" id="accordion-tab-1">
//                     <div class="card">
//                       <div class="card-header" id="accordion-tab-1-heading-1">
//                         <h2>
//                           <button
//                             class="btn btn-link"
//                             type="button"
//                             data-toggle="collapse"
//                             data-target="#accordion-tab-1-content-1"
//                             aria-expanded="false"
//                             aria-controls="accordion-tab-1-content-1"
//                           >
//                             How does the inforcement work?
//                           </button>
//                         </h2>
//                       </div>
//                       <div
//                         class="collapse show"
//                         id="accordion-tab-1-content-1"
//                         aria-labelledby="accordion-tab-1-heading-1"
//                         data-parent="#accordion-tab-1"
//                       >
//                         <div class="card-body">
//                           <p>
//                             You are free to handle enforcement anyway you like,
//                             you can give access to security or your parking
//                             enforcement company in a number of different way so
//                             they can carry out your wishes. If you don’t have an
//                             enforcement company or want a seamless integration
//                             with our system contact us and we can put you in
//                             touch with a preferred vendor in your area.
//                           </p>
//                         </div>

//                       </div>
//                     </div>
//                   </div>

//                   <div class="accordion" id="accordion-tab-2">
//                     <div class="card">
//                       <div class="card-header" id="accordion-tab-2-heading-2">
//                         <h2>
//                           <button
//                             class="btn btn-link"
//                             type="button"
//                             data-toggle="collapse"
//                             data-target="#accordion-tab-2-content-2"
//                             aria-expanded="false"
//                             aria-controls="accordion-tab-2-content-2"
//                           >
//                             How does the inforcement work?
//                           </button>
//                         </h2>
//                       </div>
//                       <div
//                         class="collapse show"
//                         id="accordion-tab-2-content-2"
//                         aria-labelledby="accordion-tab-2-heading-2"
//                         data-parent="#accordion-tab-2"
//                       >
//                         <div class="card-body">
//                           <p>
//                             You are free to handle enforcement anyway you like,
//                             you can give access to security or your parking
//                             enforcement company in a number of different way so
//                             they can carry out your wishes. If you don’t have an
//                             enforcement company or want a seamless integration
//                             with our system contact us and we can put you in
//                             touch with a preferred vendor in your area.
//                           </p>
//                         </div>

//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </section>
//   );
// }

// export default Contact_Us;

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import bgImage from "../../images/parkingImage3.jpg";

import "./Contact.css";

export const Contact_Us = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9vgou3q",
        "template_rihik7e",
        form.current,
        "user_3Itha3dq3m6eVYOJBzeUY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      class="bg_image"
      style={{
        backgroundImage: "url(" + bgImage + ")",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div class="container">
        <form ref={form} id="contact" action="" onSubmit={sendEmail}>
          <h3>Get in Touch</h3>
          <h4>Contact us today, and get reply with in 24 hours!</h4>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              name="name"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              name="user_email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Contact Number"
              type="number"
              name="user_number"
              required
            />
          </fieldset>

          <fieldset>
            <textarea
              placeholder="Type your Message Here...."
              tabindex="5"
              name="message"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
    // <div className ="container border">
    //   <form ref={form} onSubmit={sendEmail}>
    //     <label>Name</label>
    //     <input type="text" name="name" />
    //     <label>Email</label>
    //     <input type="email" name="user_email" />
    //     <label>Message</label>
    //     <textarea name="message" />
    //     <input type="submit" value="Send" />
    //   </form>
    //   </div>
  );
};

export default Contact_Us;
