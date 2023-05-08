
import {Suspense} from 'react'
import Repo from "@/app/components/repo"
import Link from "next/link";
import RepoDirs from "@/app/components/repoDirs";

const RepoPage = ({params: {name}}) => {
  return (
    <div className="card">
        <Link href='/code/repos' className="btn btn-back">
            Back To Repositories
        </Link>
        <Suspense fallback = {<div>Loading repo.... </div>}>
        <Repo name = {name}/>
        </Suspense>
        <Suspense fallback = {<div>Loading Directories .... </div>}>
        <RepoDirs name={name}/>
        </Suspense>
    </div>
  )
}

export default RepoPage