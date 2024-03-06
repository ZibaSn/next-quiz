'use client';

import { useState } from 'react';
import { test } from '../data';
import Loading from './loading';
import Link from 'next/link';

const Page = () => {
  const [displayResult, setDisplayResult] = useState(false);
  const [currentQue, setCurrentQue] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState(0);
  const [checkSelected, setCheckSelected] = useState(false);

  const { mathTest } = test;
  console.log(mathTest);
  console.log(result);
  return (
    <div
      className="bg-violet-950 flex items-center justify-center"
      style={{ minHeight: '100vh' }}
    >
      {mathTest.length > 0 ? (
        <div className="container mx-auto bg-slate-600 px-20 py-10 w-1/2 bg-violet-300 ">
          <h1 className="pb-6 font-bold text-2xl">Math Test</h1>
          <div></div>
          <div>
            {!displayResult ? (
              <div className="">
                <h2 className="text-3xl font-bold py-2 mb-4">
                  {currentQue + 1}. {mathTest[currentQue].question}
                </h2>
                <ul>
                  {mathTest[currentQue].answers.map((enAnswer, index) => (
                    <>
                      <li
                        key={index}
                        onClick={(event) => {
                          console.log(event, 'jhjh');

                          setSelectedAnswer(index);
                          if (
                            enAnswer ===
                              mathTest[currentQue].correctAnswer &&
                            checkSelected === false
                          ) {
                            setResult((result) => result + 1);
                            setCheckSelected(true);
                          } else {
                            setResult((result) => result);
                          }
                        }}
                        className={
                          selectedAnswer === index
                            ? 'text-red-400 bg-purple-600 text-2xl p-2'
                            : 'text-2xl p-2'
                        }
                      >
                        <span>{index + 1}. </span> {enAnswer}
                      </li>
                    </>
                  ))}
                </ul>
                {currentQue < 5 ? (
                  <div className="">
                    <button
                      className="py-2 px-6 bg-violet-100 font-bold text-2xl mt-8 mr-4"
                      onClick={() => {
                        setCheckSelected(false);
                        setSelectedAnswer(null);
                        if (currentQue < 4) {
                          setCurrentQue((prev) => prev + 1);
                        } else {
                          setDisplayResult(true);
                        }
                      }}
                    >
                      Next
                    </button>
                    <Link href="/">Choose Another Test!</Link>
                  </div>
                ) : (
                  'ss'
                )}
              </div>
            ) : (
              <div className="">
                <h2 className="my-6">Result</h2>
                <div className="mr-4">
                  From {mathTest.length} Questions you answer
                  <span className="result bg-black py-2 px-4 text-yellow-100">
                    {result}
                  </span>{' '}
                  truly and your score is {result * (100 / mathTest.length)}
                  %
                </div>
                <Link href="/">Choose Another Test!</Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Page;
