import * as React from "react"
// import { Link } from "gatsby"
import { Grid, GridItem, Box, Divider,Text, Heading, Flex,VStack,Link  } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import { Header } from "../components/organisms/layout/Header"


const WorkPage = () => (
  <>
    <Header/>
    <Flex justify='center' h='120px' alignItems='center'>
        <Heading fontSize='4xl'>愛すべきPortfolioたち</Heading>
    </Flex>
    <VStack bg='white'  w='90%' mr='auto' ml='auto' pb='60px'>
        <Box mr='auto' ml='auto' mt='40px' mb='40px' w='90%'>
            <Flex justify='start' w='50%'>
                <Heading>2019年4月</Heading>
            </Flex>
            <Flex w='100%'  mt='10'>
                <Flex w='50%' justify='center' alignItems='center'>
                   <Link href="https://jankengame-2cfec.firebaseapp.com/" isExternal>
                    <StaticImage
                        src="../images/jankenGame.png"
                        width={260}
                        quality={95}
                        alt="jankengame"
                    />
                    </Link>
                </Flex>
                <Box w='50%' bg='gray.100' p='5'>
                    <Text>
                        2019年4月にプログラミングを学びはじめました。<br/>
                        この作品は学びはじめて約２週間のスクールの課題<br/>
                        ”ジャンケンゲームを作ろう”で作りました。<br/>
                        これを作っている時、本当に楽しくて、子供の頃に戻ったような感覚を覚えました。<br/>
                        僕にプログラミングの楽しさを教えてくれた、ある意味で原点とも言える作品です。
                    </Text>
                    <Box mt='10px'>
                        <Text>主な使用技術：</Text>
                        <Text>HTML,CSS,Javascript</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
        <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' >
            <Flex justify='start' w='50%'>
                <Heading>2019年10月</Heading>
            </Flex>
            <Flex w='100%'  mt='10'>
                <Flex w='50%' justify='center' alignItems='center'>
                    <Link href="https://cryptotuber.com/#/" isExternal>
                        <StaticImage
                            src="../images/cryptotuber_logoT.jpg"
                            width={220}
                            quality={95}
                            alt="cryptotuber"
                        />
                    </Link>
                </Flex>
                <Box w='50%' bg='gray.100' p='5'>
                    <Text>
                    半年間のスクールの卒業制作で作りました<br/>
                    駆け出しのYoutuberの登録者数をBlockChainに刻みNFT化して販売<br/>
                    Youtuberが人気になればなるほどTokenの価値が上がるというアイデアでした<br/>
                    結局、技術的にもビジネス的にも未熟で、正式リリースにはいたりませんでした<br/>
                    </Text>
                    <Box mt='10px'>
                        <Text>主な使用技術：</Text>
                        <Text>Vue.js, QuasarFramework,Solidity,NFT,Firebase</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
        <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
            <Flex justify='start' w='50%'>
                <Heading>2020年4月</Heading>
            </Flex>
            <Flex w='100%'  mt='10'>
                <Flex w='50%' justify='center' alignItems='center'>
                    <Link href="https://gamelive.jp" isExternal>
                        <StaticImage
                            src="../images/gameLivelogo.png"
                            width={220}
                            quality={95}
                            alt="cryptotuber"
                        />
                    </Link>
                </Flex>
                <Box w='50%' bg='gray.100' p='5'>
                    <Text>
                    上記を制作している際にSubprojectとして作成<br/>
                    Youtube,Twitch,Mildom,Niconicoなど多種のゲーム配信プラットフォームのライブ配信を一括で検索、閲覧できたら便利なのではないかと考えて作りました。<br/>
                    リリースして実際に色んな方に使用していただいたのですが、継続使用してくださる方は皆無でした笑<br/>
                    （現在Niconico,MildomがAPI取得できません。）<br/>
                    </Text>
                    <Box mt='10px'>
                        <Text>主な使用技術：</Text>
                        <Text>Vue.js, QuasarFramework,GCP,Firebase, GraphQL</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
        <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
            <Flex justify='start' w='50%'>
                <Heading>2020年7月</Heading>
            </Flex>
            <Flex w='100%'  mt='10'>
                <Flex w='50%' justify='center' alignItems='center'>
                    <Link href="https://cooktuber.com" isExternal>
                        <StaticImage
                            src="../images/CookTuber_logo.png"
                            width={220}
                            quality={95}
                            alt="cryptotuber"
                        />
                    </Link>
                </Flex>
                <Box w='50%' bg='gray.100' p='5'>
                    <Text>
                    こちらもGameLiveと同時期に作っていたプロダクトです<br/>
                    コロナで自宅でYoutube見ながら料理される方が増えるのではないかと思い作りました。<br/>
                    若干の手応えを感じた時期もありましたが、結局僕自身の継続していく気力がなくなり終了しました<br/>
                    </Text>
                    <Box mt='10px'>
                        <Text>主な使用技術：</Text>
                        <Text>Vue.js, QuasarFramework,Firebase</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
        <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
            <Flex justify='start' w='50%'>
                <Heading>2020年10月</Heading>
            </Flex>
            <Flex w='100%'  mt='10'>
                <Flex w='50%' justify='center' alignItems='center'>
                    <Link href="" isExternal>
                        <StaticImage
                            src="../images/nonoshireLogo.png"
                            width={220}
                            quality={95}
                            alt="cryptotuber"
                        />
                    </Link>
                </Flex>
                <Box w='50%' bg='gray.100' p='5'>
                    <Text>
                    CryptoTuberを作って、ユーザーインタビューなどしていた際に気がついた事として、今の時代
                    mobile対応は必須だと言う事です。<br/>
                    Mobileアプリも作れるようになりたいと思いFlutterを勉強しはじめました。
                    練習プロダクトとして当初別のプロダクトを考えていたのですが、plugin とgoogleMap
                    が干渉してうまくいかず、方針を変更してゲームを作りました。<br/>
                    画面をののしる事で、音声認識を使ってダメージを与えられると言うゲームですが、
                    完成して気づいた、、、、クソゲーだ。<br/>
                    </Text>
                    <Box mt='10px'>
                        <Text>主な使用技術：</Text>
                        <Text>Flutter</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
        <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
            <Flex justify='start' w='50%'>
                <Heading>2021年6月</Heading>
            </Flex>
            <Flex w='100%'  mt='10'>
                <Flex w='50%' justify='center' alignItems='center'>
                    <Link href="" isExternal>
                        <StaticImage
                            src="../images/BlockAidHP.png"
                            width={220}
                            quality={95}
                            alt="cryptotuber"
                        />
                    </Link>
                </Flex>
                <Box w='50%' bg='gray.100' p='5'>
                    <Text>
                        2021年3月にエンジニアとして就職しました。<br/>
                        これまでのポートフォリオ、技術スタックの整理目的に当サイトを作りました。<br/>
                        当初Vue,Nuxtで作っていたのですが、振り返って俺、Vueばっかりやな、、、と思い<br/>
                        React, Gatsbyを使って作り直しました。
                    </Text>
                    <Box mt='10px'>
                        <Text>主な使用技術：</Text>
                        <Text>React, TypeScript, Gatsby.js, Contentful</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
        <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
            <Flex justify='start' w='50%'>
                <Heading>2021年</Heading>
            </Flex>
            <Flex w='100%'  mt='10'>
                <Flex w='50%' justify='center' alignItems='center'>
                    <Link href="" isExternal>
                        <StaticImage
                            src="../images/question.png"
                            width={220}
                            quality={95}
                            alt="cryptotuber"
                        />
                    </Link>
                </Flex>
                <Box w='50%' bg='gray.100' p='5'>
                    <Text>
                        2021年から取り組んでいるプロダクトがあります。ただ、3月からフルタイムで働きつつ、大学院にも通っている身分で、なかなか進捗が遅いです
                        。<br/>今年度中にはリリースしたい！
                    </Text>
                    <Box mt='10px'>
                        <Text>主な使用技術：</Text>
                        <Text>React, Typscript, Django, python, pyTorch,GCP</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    </VStack>
  </>
)

export default WorkPage
