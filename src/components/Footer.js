import React from "react";
import FilterLink from "./FilterLink";
import { VisbilityFilters } from "../redux/actions/todoAction";

const Footer = () => (
  <div>
    <span> Show : </span>
    <FilterLink filter={VisbilityFilters.SHOW_ALL}> All </FilterLink>
    <FilterLink filter={VisbilityFilters.SHOW_ACTIVE}> Active </FilterLink>
    <FilterLink filter={VisbilityFilters.SHOW_COMLETED}> Completed </FilterLink>
  </div>
);

export default Footer;
