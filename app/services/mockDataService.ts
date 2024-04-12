import { ICategory, IQuestion, IResponse } from "./dataService"

class MockDataService {

    getCategories = async () => {
        return new Promise<ICategory[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(this._getCategories());
            }, 2000);
          });
    };

    _getCategories() : ICategory[] {
        return [
            {
                id: 1,
                topic_name: "depression\r"
            },
            {
                id: 2,
                topic_name: "intimacy\r"
            },
            {
                id: 3,
                topic_name: "relationships\r"
            },
            {
                id: 4,
                topic_name: "anxiety\r"
            },
            {
                id: 5,
                topic_name: "family-conflict\r"
            },
            {
                id: 6,
                topic_name: "parenting\r"
            },
            {
                id: 7,
                topic_name: "self-esteem\r"
            },
            {
                id: 8,
                topic_name: "relationship-dissolution\r"
            },
            {
                id: 9,
                topic_name: "behavioral-change\r"
            },
            {
                id: 10,
                topic_name: "anger-management\r"
            },
            {
                id: 11,
                topic_name: "trauma\r"
            },
            {
                id: 12,
                topic_name: "marriage\r"
            },
            {
                id: 13,
                topic_name: "domestic-violence\r"
            },
            {
                id: 14,
                topic_name: "lgbtq\r"
            },
            {
                id: 15,
                topic_name: "social-relationships\r"
            },
            {
                id: 16,
                topic_name: "workplace-relationships\r"
            },
            {
                id: 17,
                topic_name: "substance-abuse\r"
            },
            {
                id: 18,
                topic_name: "grief-and-loss\r"
            },
            {
                id: 19,
                topic_name: "spirituality\r"
            },
            {
                id: 20,
                topic_name: "professional-ethics\r"
            },
            {
                id: 21,
                topic_name: "legal-regulatory\r"
            },
            {
                id: 22,
                topic_name: "counseling-fundamentals\r"
            },
            {
                id: 23,
                topic_name: "eating-disorders\r"
            },
            {
                id: 24,
                topic_name: "addiction\r"
            },
            {
                id: 25,
                topic_name: "human-sexuality\r"
            },
            {
                id: 26,
                topic_name: "sleep-improvement\r"
            },
            {
                id: 27,
                topic_name: "diagnosis\r"
            },
            {
                id: 28,
                topic_name: "stress\r"
            }
        ]
    }

    getQuestions = async (catId: number) => {
        return new Promise<IQuestion[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(this._getQuestions(catId));
            }, 2000);
          });
    };

    _getQuestions(catIds: number) : IQuestion[] {
        return [
            {
                id: 1,
                question: "I've been feeling worthless, unaccomplished, and so frustrated. I want to break things, hit myself, run away, kick, scream, and cry. I just want to be happy and outgoing again. I want to be able to take care of my daughter and live comfortably.",
                q_id: "Q_001"
            },
            {
                id: 2,
                question: "My life is completely normal, yet I feel empty inside. I feel as if I already know why I'm alive: to reproduce and die.",
                q_id: "Q_002"
            },
            {
                id: 3,
                question: "I tried telling my husband I was depressed, and he ignored me. He said \"you're always sad or depressed.\" And he picked up his phone and ignored me. I said, \"Please don't exaggerate, that isn't true.\" And he said, \"Whatever babe. You just want to be sad.\"\n   How can I get through to him so he will take me seriously?",
                q_id: "Q_003"
            },
            {
                id: 4,
                question: "I just feel sad all the time and I don't like anyone in my family. I feel like they're trying to control me and won't let me grow.",
                q_id: "Q_004"
            },
            {
                id: 5,
                question: "I'm a teenager and I I go through periods of moodiness. I have extreme feelings (but I bury them), and then I feel nothing - just empty and emotionless.\n   I have trust issues, low self esteem,ban extreme fear of abandonment, and I constantly reevaluate my relationships. I also don't know who I am as a person. I'm not happy overall, but I'm not suicidal. Can I just feel happy?",
                q_id: "Q_005"
            },
            {
                id: 6,
                question: "I feel like I am internally screaming all the time. Externally, I am calm, but I have this intense, unidentifiable emotion constantly. I don't feel sad. I don't cry a lot. I feel rather emotionally distant other than the internal screaming. It kind of feels like I'm a caged animal.",
                q_id: "Q_006"
            },
            {
                id: 7,
                question: "I know I need to deal with my depression. But I don't know how and I don't want to tell anyone.    How can I deal with depression without telling anyone?",
                q_id: "Q_007"
            },
            {
                id: 8,
                question: "At school, it feels like I've lost all my friends, and I've been really weird with my sleeping patterns. I used to cut myself, and I really want to again, but I change in the locker rooms because I don’t want anybody to see. I get ticked off easy and overreact. At night, I’m very depressed and listen to sad music and all that sort of stuff. Please help me. I just want to be happy again, and I feel like I’m starting to fake a smile at school.",
                q_id: "Q_008"
            },
            {
                id: 9,
                question: "They don't go away, and I feel like I'm going crazy. Does that ever stop? Can it be a symptom of medication?",
                q_id: "Q_009"
            },
            {
                id: 10,
                question: "I no longer carry expressions on my face, and my emotions are decreasing the more I have fights with my fiancée.",
                q_id: "Q_010"
            },
            {
                id: 11,
                question: "When I'm sad and alone, I want to cut myself.",
                q_id: "Q_011"
            },
            {
                id: 12,
                question: "After he got home from the hospital he was angry, then for a time wonderful. Now he is depressed and hopeless again.",
                q_id: "Q_012"
            },
            {
                id: 13,
                question: "I'm in my late 50s. I never loved or have been loved. I need deeper help than is offered in my small town, but I cannot leave this town because of agoraphobia. I find myself losing hope more and more. My brain barely works anymore, and my memory so small, I forget in a moment. I serve no purpose. I'm incapable of work or anything of value, and I never have been. I’m a complete waste of time and resources, and yet I keep trying. Why? Why does God insist that I continue to exist? I’m not suicidal, just tired.",
                q_id: "Q_013"
            },
            {
                id: 14,
                question: "People who are parental figures in my life have, in the past, hurt me, and some continue to do so. It makes me feel like I'm not good enough for my husband or the life he provides me. I have had jobs, but I am going through a lot of my past garbage and trying to figure out when it all went wrong. Any time I bring these things up, I am expected to be over the issue. These are people that you can't just cut out, but I have never received apologies for so much of my pain. I don't know what to do any more. I don't know who I am anymore.",
                q_id: "Q_014"
            },
            {
                id: 15,
                question: "I don't know if I have depression, but I have been very sad. There are nights that I don't sleep. I don't eat all day sometimes, I don't have energy to anything anymore.",
                q_id: "Q_015"
            },
            {
                id: 16,
                question: "I have been falling into a deep depression where I can no function during the day and night. The only time I am at peace is when I’m asleep. If I am with friends, family, at work, and mainly alone, I cannot think straight. I no longer feel like myself.",
                q_id: "Q_016"
            },
            {
                id: 17,
                question: "I'm starting to think that I might have depression. The thing is though, I'm not exactly sad. I can joke with my friends and stuff, but I've stopped caring about my work, and I've been starting to think that life is pointless. I really have no clue if I need help, or if I'm just tired or something.",
                q_id: "Q_017"
            },
            {
                id: 18,
                question: "I am the problem. I make my family argue because of me. My mom has even said it. It's constantly like this. I cause problems. I am worthless. I can't stop crying. Sometimes I have to cry myself to sleep. I can't even leave my room because my family can't stand me.",
                q_id: "Q_018"
            },
            {
                id: 19,
                question: "I stopped for a while, but I’ve started doing it again. It’s like an addiction. The more I try to stop, the more I want to do it. I’ve tried doing some of the stuff they say to do like draw, but it doesn’t work.",
                q_id: "Q_019"
            },
            {
                id: 20,
                question: "I have been dealing with depression and anxiety for a number of years. I have been on medication, but lately my depression has felt worse. Can counseling help?",
                q_id: "Q_020"
            },
            {
                id: 21,
                question: "A girl and I were madly in love. We dated for over a year and were even talking about marriage and future plans together. She moved away for school, and we attempted a long distance relationship. We eventually broke up. It's been a year now, and I still haven't lost my feelings for her. I still love her the same way I did. I've suffered from depression ever since the breakup and have been unable to connect with anyone else. It's damaging me and my life.",
                q_id: "Q_021"
            },
            {
                id: 22,
                question: "My girlfriend just quit drinking and she became really depressed. She told me that she wants to move. What can I do to help her? I want her to stay.",
                q_id: "Q_022"
            },
            {
                id: 23,
                question: "I've been having this ongoing problem for most of my life now. I am a young adult, and right now, driving and even being a passenger gives me terrible panic attacks and anxiety. I can't ride in the backseat or the front seat with the safety belt on. I have to lean the seat back a bit because the pressure on my back terrifies me. I miss so many opportunities to go places with friends and family because of my fears of having a panic attack. My family offers little to no support. They think it's fake or \"all in my head.\" It makes me feel guilty and at times depressed to the point where I'd rather never wake up anymore. I am not self-harming, I just feel meaningless. This constant fear has taken over my thoughts and my life. I was such a happy person. I want my life back. I want to travel with my friends and family again, but I don't know how. I've almost given up hope on getting better and just accepting the fact that I'll live with this anxiety forever.",
                q_id: "Q_023"
            },
            {
                id: 24,
                question: "I'm currently up paranoid about, well, everything. I can't get to sleep, and I have a feeling of being watched constantly. I have extreme depression and anxiety. I'd really like to not be this paranoid and go to bed. I've tried night lights, ambiance, and warm baths.",
                q_id: "Q_024"
            },
            {
                id: 25,
                question: "People have been calling me names, and I have had enough of it. I cannot stand it anymore I'm done. I have told someone this, and that is why I am writing this. The thoughts are awful.",
                q_id: "Q_025"
            },
            {
                id: 26,
                question: "I'm in a state of depression right now. Who can I talk to? I've been sick in a lot of pain and crying. Don't know where to turn.",
                q_id: "Q_026"
            },
            {
                id: 27,
                question: "I feel like I'm so alone. I treat people horribly based on what's going on in my life and don't realize it. It ends up pushing them away, especially the ones I love the most. I have a weird feeling deep down inside, and it won't go away. I feel like I'm collapsing.",
                q_id: "Q_027"
            },
            {
                id: 28,
                question: "I’m facing severe depression and anxiety and I just feel like I’m going through a lot. This really distracts me and I cant get my mind off the things that are bothering me.    How do I overcome this anxierty and depression?",
                q_id: "Q_028"
            }
        ]
    }

    getResponses = async (questionId: number) => {
        return new Promise<IResponse[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(this._getResponses(questionId));
            }, 2000);
          });
    };

    _getResponses(questionId: number) : IResponse[] {
        return [
            {
                "modelID": "M1",
                "manswer": "Feeling empty in a life that looks full from the outside is like walking through a gallery of your own achievements and not recognizing the artist. This disconnect could be your psyche's way of seeking deeper fulfillment. Engaging in activities that connect you with others or a cause larger than yourself, such as volunteering, might help you paint new strokes on your canvas. What are your thoughts on exploring paths that lead you to new passions?",
                "questionID": "Q_002"
            },
            {
                "modelID": "M2",
                "manswer": "Feeling empty in a life that looks full from the outside is like walking through a gallery of your own achievements and not recognizing the artist. This disconnect could be your psyche's way of seeking deeper fulfillment. Engaging in activities that connect you with others or a cause larger than yourself, such as volunteering, might help you paint new strokes on your canvas. What are your thoughts on exploring paths that lead you to new passions?",
                "questionID": "Q_002"
            },
            {
                "modelID": "M3",
                "manswer": "Feeling empty in a life that looks full from the outside is like walking through a gallery of your own achievements and not recognizing the artist. This disconnect could be your psyche's way of seeking deeper fulfillment. Engaging in activities that connect you with others or a cause larger than yourself, such as volunteering, might help you paint new strokes on your canvas. What are your thoughts on exploring paths that lead you to new passions?",
                "questionID": "Q_002"
            },
            {
                "modelID": "M4",
                "manswer": "Feeling empty in a life that looks full from the outside is like walking through a gallery of your own achievements and not recognizing the artist. This disconnect could be your psyche's way of seeking deeper fulfillment. Engaging in activities that connect you with others or a cause larger than yourself, such as volunteering, might help you paint new strokes on your canvas. What are your thoughts on exploring paths that lead you to new passions?",
                "questionID": "Q_002"
            }
        ]
    }

    rateResponse = async (modelId: string, rating: number) => {
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
          });
    };
}

export default new MockDataService()