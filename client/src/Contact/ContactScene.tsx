import * as React from 'react';
import { generate } from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import contactItems from 'ps/Contact/contact-items';
import 'ps/Contact/contact.scss';
import ContactIcon, { ContactIconProps } from './ContactIcon';

export interface ContactSceneProps {}

const makeContactIcon = (props: ContactIconProps) => <ContactIcon {...props} key={generate()} />;

const ContactScene: React.SFC<ContactSceneProps> = () => (
  <div className="contact">
    <section className="contact-icons">{contactItems.map(makeContactIcon)}</section>
  </div>
);

export default ContactScene;
