import Typewriter from 'typewriter-effect'

export default function Namecard() {
    return (
        <div className={"flex flex-col items-center justify-center h-[58vh]"}>
            <span className={"text-gray-500 dark:text-gray-300 font-sans text-7xl"}>Daniel Liu</span>

            <div className={'text-2xl text-blue-400 dark:text-green-500'}>
                <Typewriter className="typewriter"
                              options={{
                                  strings: ['Jobless Graduate', 'Video Game Addict', 'Washed Tennis Player', 'Consistently Last Place in Board Games'],
                                  autoStart: true,
                                  loop: true,
                              }}
            />
            </div>
        </div>
    )
}
