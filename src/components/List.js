import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

List.propTypes = {};

function handleClick(event) {  
    event.preventDefault();  
    alert('BreadCrumb');  
}  

function List(props) {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Demo1
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Demo2
        </Link>
        <Link
          color="textPrimary"
          href="/components/breadcrumbs/"
          onClick={handleClick}
          aria-current="page"
        >
          Demo3
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default List;
