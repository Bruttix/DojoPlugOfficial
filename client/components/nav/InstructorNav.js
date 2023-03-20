import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Context } from "../../context";

const InstructorNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

    const { state, dispatch } = useContext(Context);
    const { user } = state;
    return (
      <>
        { user && user.role && user.role.includes("Instructor") ? (
            <>
                <div className="nav flex-column nav-pills">
                    <Link href="/instructor">
                        <a className={`nav-link instructDashboard ${current === "/instructor" && "active"}`}>
                            Dashboard
                        </a>
                    </Link>
                    <Link href="/instructor/course/create">
                        <a
                            className={`nav-link instructDashboard ${current === "/instructor/course/create" && "active"
                                }`}
                        >
                            Course Create
                        </a>
                    </Link>

                    <Link href="/instructor/revenue">
                        <a
                            className={`nav-link instructDashboard ${current === "/instructor/revenue" && "active"
                                }`}
                        >
                            Revenue
                        </a>
                    </Link>
                </div>
            </>
        ) : (
            <>
                <div className="nav flex-column nav-pills"></div>
            </>
        )
        }
      </>
    );
};

export default InstructorNav;
