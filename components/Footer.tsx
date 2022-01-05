import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import config from '../config.json';

const IconLink: React.FC<{href: string}> = ({ href, children}) => (
  <Link href={href}>
    <a>
      {children}
    </a>
  </Link>
)

export default () => (
  <div className="
      p-4 flex
      flex-row justify-center items-center space-x-4" >

    <IconLink href={config.social.github}>
      <FaGithub />
    </IconLink>

    <IconLink href={config.social.linkedin}>
      <FaLinkedin />
    </IconLink>
  </div>
)