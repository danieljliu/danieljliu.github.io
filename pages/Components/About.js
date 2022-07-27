export default function About() {
    return (
        <div className={"flex flex-col items-center justify-center dark:text-gray-300 "}>
            <h1 className="text-center text-5xl text-gray-500 dark:text-gray-300 h-20">About Me</h1>
            <div className={"text-center text-2xl w-[50vw]"}>
                B o y s today I will be trying to market myself by making a generic website. Hi, I&apos;m Dan Liu, recent graduate of Rutgers University
                with a
                <span className={"text-blue-400 dark:text-green-500"}> B.S. in Bioinformatics </span>
                and a
                <span className={"text-blue-400 dark:text-green-500"}> minor in Computer Science</span>.
                My experience using data science in bioinformatics research piqued my interest in the field, so I&apos;m currently pursuing a
                <span className={"text-blue-400 dark:text-green-500"}> M.S. in Data Science </span>
                at Rutgers University. If you&apos;re viewing this on your phone I apologize for the mess, I&apos;m currently wrangling
                React to get it to be mobile-friendly 😅

            </div>
            <span className={"text-lg text-gray-500"}>Coded using Next.js, React, and TailwindCSS if you were curious</span>

        </div>
    )
}
