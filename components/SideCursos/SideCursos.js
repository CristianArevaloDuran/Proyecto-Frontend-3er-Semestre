import Loader from "@/components/Loader/Loader";
import Link from "next/link";
import getCategories from "@/hooks/getCategories/getCategories";

import './SideCursos.css'

export default function SideCursos() {
    const categories = getCategories();
    

    return (
        <div className="categories-container">
        <div className="head">
          <h2>Cursos</h2>
          <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0567 35L8.35727 28.6667V18.6667L1.67188 15L20.0567 5L38.4415 15V28.3333H35.0988V16.8333L31.7561 18.6667V28.6667L20.0567 35ZM20.0567 21.1667L31.5054 15L20.0567 8.83333L8.60797 15L20.0567 21.1667ZM20.0567 31.2083L28.4134 26.7083V20.4167L20.0567 25L11.7 20.4167V26.7083L20.0567 31.2083Z" fill="#676767"/>
          </svg>
        </div>
        <ul className="categories">
          {
            categories.loading ? <Loader /> : categories.categories.map((category) => (
              <Link key={category._id}  href={`/category/${category._id}`} className="category">
                <li>
                  {category.name}
                </li>
                <p>{category.entradas}</p>
              </Link>
            )) 
          }
        </ul>
      </div>
    )
}