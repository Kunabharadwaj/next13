import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'


async function fetchRepose () {
    const repsonse = await fetch('https://api.github.com/users/kunabharadwaj/repos');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //wait for 1 second
    const repos =  await repsonse.json();
    return repos;
}

const  ReposPage = async () => {
    const repos = await fetchRepose();
    
  return (
    <div className="repo-container">
        <h2>Repositories</h2>
        <ul className="repo-list">
            {repos.map((repo) => (
                <li key={repo.id}>
                    <Link href={`/code/repos/${repo.name}`}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <div className="repo-details">
                            <span>
                                <FaStar/> {repo.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch/> {repo.forks_count}
                            </span>
                            <span>
                                <FaEye/> {repo.watchers_count}
                            </span>
                        </div>
                    </Link>
                </li>
            )

            )}
        </ul>
    </div>
  )
}

export default ReposPage;

//api.github.com/users/kunabharadwaj/repos