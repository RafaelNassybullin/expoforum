import React from 'react';
import styled from 'styled-components';
import {Switch, NavLink, useHistory} from "react-router-dom";

const Navigation = () => {
    return (
        <Section>
            <Wrapper>
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">
                            Menu
                        </div>
                        <ul className={'nav-links'}>
                            <li>
                                <NavLink to={'/services'} exact>
                                    Sevices
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/new'} exact>
                                    New
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'} exact>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/roar'} exact>
                                    Roar
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">
                            Contact
                        </div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className={'nav-info-label'}>
                                    Email
                                </li>
                                <li>
                                    Get in touch with us
                                </li>
                                <li>
                                    Get a free audit
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className={'nav-info-label'}>
                                    Head quarter
                                </li>
                                <li>
                                    Route to Jura 49
                                </li>
                                <li>
                                    1700 fribourg
                                </li>
                                <li>
                                    Shubarkuduk
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className={'nav-info-label'}>Phone</li>
                                <li>+ 482 256 200</li>
                            </ul>
                            <ul className="nav-info">
                                <li className={'nav-info-label'}>Legal</li>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    );
};


export default Navigation;


const Section = styled.div`
  left: 0;
  top: -1px;
  width: 100%;
  height: 50%;
  z-index: 10;
  //display: none;
  position: fixed;
  overflow: hidden;
  background: wheat;
  a{
    position: relative;
    &:after{
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: black;
      transition: 400ms ease;
    }
    &:hover{
      &:after{
        width: 100%;
        left: 0;
        background: black;
      }
    }
  }
  .nav-columns {
    width: 100%;
    display: flex;
    padding: 0 32px;
    @media (max-width: 654px) {
      flex-direction: column;
    }
    @media (max-width: 425px) {
      padding: 0 16px;
    }

    .nav-column {
      width: 45%;
      @media (max-width: 654px) {
        width: 100%;
      }

      &:last-child {
        width: 55%;
        @media (max-width: 654px) {
          width: 100%;
        }
      }

      .nav-label {
        margin-bottom: 3rem;
        font-size: 1.2rem;
        @media (max-width: 758px) {
          font-size: 1rem;
          margin-bottom: 1.4rem;
        }
        @media (max-width: 425px) {
          font-size: 0.875rem;
          margin-bottom: 1.2rem;
        }
      }

      .nav-links {
        padding: 0;
        margin: 0;

        li {
          list-style: none;
          margin-bottom: 2.8rem;
          @media (max-width: 425px) {
            margin-bottom: 1.6rem;
          }

          a {
            font-weight: 600;
            font-size: 2.8rem;
            text-decoration: none;
            color: black;
            @media (max-width: 425px) {
              font-size: 2rem;
            }
          }
        }
      }

      .nav-infos {
        display: flex;
        flex-wrap: wrap;
        @media (max-width: 654px) {
          justify-content: space-between;
        }

        .nav-info {
          padding: 0;
          width: 50%;

          &:nth-child(2), :nth-child(3) {
            @media (max-width: 654px) {
              display: none;
            }
          }

          .nav-info-label {
            font-weight: 600;
          }

          li {
            list-style: none;
            font-weight: 300;
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
            @media (max-width: 758px) {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
            @media (max-width: 420px) {
              font-size: 1rem;
              margin-bottom: 0.875rem;
            }

            a {
                text-decoration: none;
              color: black;
            }
          }
        }
      }
    }
  }

`

const Wrapper = styled.div`
  width: 1560px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1560px) {
    width: 1280px;
  }

  @media (max-width: 1366px) {
    width: 1080px;
  }

  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin-right: 16px ;
  }
`