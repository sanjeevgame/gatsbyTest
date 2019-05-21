import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    {" "}
    <nav>
      <ul>
        <li>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/page-1`}
          >
            <a>Page 1</a>
          </Link>
        </li>
        <li>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/page-2`}
          >
            <a>Page 2</a>
          </Link>
        </li>
        <li>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/page-3`}
          >
            <a>Page 3</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)
