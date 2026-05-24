import { useState } from "react";
import styles from "./Jokes.module.scss";
import jokes from "./Jokes.json";
const getRandomJoke = () => {

    // GET ALL CATEGORY NAMES FROM JSON
    const categories = Object.keys(jokes.categories);

    // PICK RANDOM CATEGORY
    const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];

    // GET CATEGORY DATA
    const selectedCategory = jokes.categories[randomCategory];

    // RANDOMLY DECIDE QUESTION OR FULL JOKE
    const useQuestion = Math.random() > 0.5;

    // QUESTION TYPE
    if (
        useQuestion &&
        Object.keys(selectedCategory.QuestionTypes).length > 0
    ) {

        const questions = Object.keys(
            selectedCategory.QuestionTypes
        );

        const randomQuestion =
            questions[
                Math.floor(Math.random() * questions.length)
            ];

        setJoke({
            category: randomCategory,
            format: "question",
            question: randomQuestion,
            answer:
                selectedCategory.QuestionTypes[randomQuestion]
        });

    }

    // FULL JOKE TYPE
    else {

        const randomFull =
            selectedCategory.FullOnes[
                Math.floor(
                    Math.random() *
                    selectedCategory.FullOnes.length
                )
            ];

        setJoke({
            category: randomCategory,
            format: "full",
            text: randomFull
        });

    }

    setOpen(true);
};

export default function Jokes() {
    const [open, setOpen] = useState(false);
    const [joke, setJoke] = useState(null);

    const getRandomJoke = () => {
        const categories = Object.keys(jokes.categories);

        const randomCategory =
            categories[Math.floor(Math.random() * categories.length)];

        const selectedCategory = jokes.categories[randomCategory];

        const useQuestion = Math.random() > 0.5;

        if (
            useQuestion &&
            Object.keys(selectedCategory.QuestionTypes).length > 0
        ) {
            const questions = Object.keys(
                selectedCategory.QuestionTypes
            );

            const randomQuestion =
                questions[Math.floor(Math.random() * questions.length)];

            setJoke({
                type: randomCategory.replaceAll("_", " "),
                format: "question",
                question: randomQuestion,
                answer:
                    selectedCategory.QuestionTypes[randomQuestion]
            });
        } else {
            const randomFull =
                selectedCategory.FullOnes[
                    Math.floor(
                        Math.random() *
                            selectedCategory.FullOnes.length
                    )
                ];

            setJoke({
                type: randomCategory.replaceAll("_", " "),
                format: "full",
                text: randomFull
            });
        }

        setOpen(true);
    };

    return (
    <>
        {/* OPEN BUTTON */}
        <button
            onClick={getRandomJoke}
            className={styles.jokesOpenBtn}
        >
            Want a joke?
        </button>

        {/* MODAL */}
        {open && joke && (
            <div className={styles.jokesOverlay}>

                <div className={styles.jokesModal}>

                    {/* CLOSE */}
                    <button
                        onClick={() => setOpen(false)}
                        className={styles.jokesCloseBtn}
                    >
                        ✕
                    </button>

                    {/* CATEGORY */}
                    <p className={styles.jokesCategory}>
                        {joke.type}
                    </p>

                    {/* JOKE */}
                    {joke.format === "question" ? (
                        <>
                            <h2 className={styles.jokesQuestion}>
                                {joke.question}
                            </h2>

                            <p className={styles.jokesAnswer}>
                                {joke.answer}
                            </p>
                        </>
                    ) : (
                        <h2 className={styles.jokesFull}>
                            {joke.text}
                        </h2>
                    )}

                    {/* RANDOM AGAIN */}
                    <button
                        onClick={getRandomJoke}
                        className={styles.jokesRandomBtn}
                    >
                        Another Joke
                    </button>

                </div>

            </div>
        )}
    </>
);
}