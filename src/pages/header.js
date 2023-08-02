import React from "react";
import { BrowserRouter, Link, Outlet } from "react-router-dom";
import './base.css';
export default function Header() {
    return (
        <>
        <nav id="header">
            <Link className="item" to="/">Home</Link>
            <Link className="item" to="/about">About</Link>
            <Link className="item" to="/solutions">Solutions</Link>
            <Link className="item" to="/contact">Contact</Link>
        </nav>
        </>
    )
};