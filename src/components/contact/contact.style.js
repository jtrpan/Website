import styled from 'styled-components';

export const Heading = styled.h1`

.questionLine {
  position: absolute;
  left: 22%;
  top: 6%;
  right: 0;
  font-size: calc(10px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Lato;
  color: #c0c3c4;
  pointer-events: none;
}

.chatLine {
  position: absolute;
  left: 55%;
  top: 6%;
  right: 0;
  font-size: calc(10px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Lato;
  color: #c0c3c4;
  pointer-events: none;
}

.contactLine {
  position: absolute;
  left: 22%;
  bottom: 12%;
  right: 0;
  font-size: calc(10px + (64 - 44) * ((100vw - 320px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Montserrat;
  color: #c0c3c4;
  pointer-events: none;
}

@media (min-width: 1400px){
  .break-small {
    display: none;
  }
}

.contact-link {
  position: absolute;
  top: 30%;
  left: 22%;
  text-align: left;
  text-decoration: none;
  user-select: none;  
  -webkit-tap-highlight-color: transparent;
  font-size: calc(100px + (64 - 22) * ((110vw - 1620px) / (1600 - 320))) !important;
  font-family: Fjalla One;

  :active {
    transform: scale(1.2);
  }
}

.contact-link_content {
  display: block;
  color: #7395ae;
}

.contact-link:hover > .contact-link_content {
  color: #557a95;
  transition: transform 0.4s ease-in-out;
  transform: scale(1.1);

  /* Block "sticky hover" effect on mobile devices */
  @media (hover: none) {
    color: inherit;
  }
}

/* Remove default focus from target elements */  
.contact-link:focus,
.contact-link_content:focus {
  outline: none;
}

/* Only when the outer element is reached by a keyboard, apply the focus styles. Now clicking on the element won't focus the link */  
.contact-link:focus > .contact-link_content {
  color: #557a95;

  /* Apply default focus styles */
  outline: 3px solid turquoise;
}

.buttonGroup {
  position: absolute;
  left: 22%;
  bottom: 11%;
  right: 0;
}

.contactIcon {
  padding-right: 50px;
}


.contactButton1:hover {
  transform: scale(1.6);
  transition: transform 0.4s ease-in-out;
  color: #2867B2;
}
.contactButton2:hover {
transform: scale(1.6);
transition: transform 0.4s ease-in-out;
color: #24292e;
}
.contactButton3:hover {
transform: scale(1.6);
transition: transform 0.4s ease-in-out;
color: #3b5998;
}
.contactButton4:hover {
transform: scale(1.6);
transition: transform 0.4s ease-in-out;
color: #1DA1F2;
}
`;


export const Wrapper = styled.section`
  padding: 1em;
  background: #5D5C61;
`;
