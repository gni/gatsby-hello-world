import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
<div style={{ color: `green` }}>
<Link to="/contact/">Contact</Link>
<Header headerText="Hello world!" />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<img src="https://source.unsplash.com/random/400x200" alt="" />
</div>
)