import axios from "axios";

export default async (req, res) => {
    const { slug } = req.query

    try {
        const data = await axios({
            url: 'https://graphql.anilist.co',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {
                query: `
                query ($id: Int, $page: Int, $perPage: Int, $search: String) {
                    Page (page: $page, perPage: $perPage) {
                      pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                      }
                      media (id: $id, search: $search) {
                        title {
                          romaji
                          native
                          english
                        }
                        description
                        coverImage {
                            extraLarge
                        }
                        bannerImage
                        episodes
                        type
                        status
                        startDate {
                            year
                            month
                            day
                        }
                          endDate {
                            year
                            month
                            day
                        }
                      }
                    }
                  }
                `,
                variables: {
                    search: slug,
                    page: 1,
                    perPage: 5
                }
            }
        });

        const dataFinal = data.data.data.Page.media.map(anime => {
            return {
                title: anime.title.romaji,
                otherTitles:  {
                    jp: anime.title.native,
                    en: anime.title.english,
                },
                desc: anime.description,
                media: {
                    coverImg: anime.coverImage.extraLarge,
                    bannerImg: anime.bannerImage,
                },
                details: {
                    episodes: anime.episodes,
                    type: anime.type,
                    status: anime.status,
                    releaseDate: {
                        startDate: {
                            day: anime.startDate.day,
                            month: anime.startDate.month,
                            year: anime.startDate.year
                        },
                        endDate: {
                            day: anime.endDate.day,
                            month: anime.endDate.month,
                            year: anime.endDate.year
                        }
                    }
                }
            }
        })

        res.status(200).json({
            data: dataFinal
        });

    } catch (err) {
        res.status(500).json({
            status: res.statusCode,
            mensagem: 'Ocorreu um erro interno com o servidor.',
            error: err
        })
    }
}
