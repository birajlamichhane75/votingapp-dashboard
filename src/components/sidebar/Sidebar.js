import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { LOGO } from "../../constants/images";
import { useRef, useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { toggleMenu } from "../../redux/slice/systemSlice";


const menuItems = [
  { href: "/dashboard", title: "Dashboard", iconName: "fa-home" },

  // {
  //   href: "/candidate", title: "Candidates", iconName: "fas fa-user-tie",
  //   innerpages: [
  //     {
  //       href: "/votingstagecandidate",
  //       title: "Stage Candidate",
  //     },
  //   ]
  // },
  {
    href: "/votingcampaign", title: "Voting Campaign", iconName: "fas fa-vote-yea",
    innerpages: [
      {
        href: "/coupan",
        title: "Coupan",
      },
      {
        href: "/votes",
        title: "Votes",
      },
      {
        href: "/result",
        title: "Result",
      },
    ]
  },
  // { href: "/manageplan", title: "Manage Plan", iconName: "fa-cogs" },

  // { href: "/coupantransaction", title: "Coupan Transaction", iconName: "fas fa-ticket-alt" },


  {
    href: "/reports", title: "Reports", iconName: "fa-chart-bar",
    innerpages: [
      {
        href: "/votetrends ",
        title: "Vote Trends",
      },
      {
        href: "/performance ",
        title: "Performance",
      },
      {
        href: "/campaignstatus",
        title: "Campaign Status",
      },
    ]
  },


  // {
  //   href: "/managelocation", title: "Manage Location", iconName: "fa-map-marker-alt",
  //   innerpages: [
  //     {
  //       href: "/countries",
  //       title: "Countries",
  //     },
  //     {
  //       href: "/cities",
  //       title: "Cities",
  //     },
  //     {
  //       href: "/location",
  //       title: "Locations",
  //     },
  //   ]
  // },
  // { href: "/organizations", title: "Organizations", iconName: "fa-building" },
  // { href: "/paymentgateway", title: "Payment Gateway", iconName: "fab fa-cc-stripe" },
  // { href: "/analytics", title: "Analytics", iconName: "fa-chart-pie" },

  {
    href: "/user", title: "User Management ", iconName: "fa-user-cog",
    innerpages: [
      {
        href: "/active-user",
        title: "Acitive User",
      },
      {
        href: "/banned-user",
        title: "Banned-user",
      },
    ]
  },
  { href: "/api-documentation", title: "API Documentation", iconName: "fa-book" },
  { href: "/faq", title: "FAQ", iconName: "fa-question-circle" },
  { href: "/feedback", title: "Feedback", iconName: "fa-comment-alt" },
  {
    href: "/notifications", title: "Notifications", iconName: "fa-bell",
    innerpages: [
      {
        href: "/email",
        title: "Email Notification",
      },
      {
        href: "/sms",
        title: "SMS Notification",
      },
      {
        href: "/globaltemplate",
        title: "Global Template",
      },
      {
        href: "/pushnotification",
        title: "Push Notification",
      },
      {
        href: "/notificationtemplate",
        title: "Notification Template",
      },
    ]

  },
  { href: "/logout", title: "Logout", iconName: "fa-sign-out-alt" },
];

export default function Sidebar() {

  const location = useLocation();
  const systemSelector = useSelector((state) => state.systemState);

  const dispatch = useDispatch();
  const handleToggleBar = (e) => {
    dispatch(toggleMenu())
  }

  return (
    <div
      className="sidebar"
      style={{ width: systemSelector.menu ? "250px" : "50px" }}
    >
      <div className="sidebar-top">
        <div className="sidebar-top--logo">
          <img
            src={LOGO}
            alt="Esquare logo"
            className="sidebar-top--logo__icon"
            style={{display:systemSelector.menu ? "block" : "none"}}
          />

          <div className="sidebar-top--logo__back" onClick={handleToggleBar} style={{display: systemSelector.menu ? "flex": "none" }}>
            <IoChevronBackSharp />
          </div>
        </div>
        <ul className={`sidebar-top--menu`}>
          {menuItems.map((value, index) => {
            return (
              <MenuItem
                href={value.href}
                title={value.title}
                innerpages={value.innerpages}
                isActive={location.pathname.indexOf(value.href) > -1}
                iconName={value.iconName}
                key={index}
                showLabel={systemSelector.menu}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const MenuItem = ({ href, iconName, title, isActive, showLabel, innerpages }) => {

  const [toggleLink, settoggleLink] = useState(false);
  const systemSelector = useSelector((state) => state.systemState);

  let openInnerMenu = () => {
    settoggleLink(!toggleLink)

  }
  let menuref = useRef();
  return (
    <div>
      <li className={`sidebar-top--menu__item${isActive ? " active" : ""} ${showLabel ? "open" : "close"}`} onClick={() => {
        innerpages && openInnerMenu()
      }}>
        <Link to={href} title={title}>
          <i className={`fa-solid ${iconName}`}></i>
          {showLabel ? <span>{title}</span> : null}
        </Link>
        {
          innerpages && systemSelector.menu && <FaAngleDown onClick={openInnerMenu} className="sidebar-top--menu__item-icon" />
        }

      </li>

      {
        toggleLink &&
        <ul ref={menuref} className="sidebar-top--menu-innermenu">
          {innerpages &&
            innerpages.map((page, index) => {
              return (
                <li key={index} className={`sidebar-top--menu__item`}>
                  <Link to={`${href}${page.href}`} title={page.title}>
                    <FaRegCircleDot className="icon" />
                    <span>{page.title}</span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      }
    </div>
  );
};
