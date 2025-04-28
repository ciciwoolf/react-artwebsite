const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

async function fetchGraphQL (query, variables = {}) {
  const response = await fetch(CONTENTFUL_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    console.error('GraphQL errors:', errors);
    throw new Error('Failed to fetch data from Contentful');
  }

  return data;
};

const ALL_ARTWORK = `
    query {
      paintingCollection {
        items {
          paintingTitle
          slug
          description
          mediaUrl
          slideshow
          medium
        }
      }
    }
  `;

export async function getAllArtworks () {
  const data = await fetchGraphQL(ALL_ARTWORK);
  return data.paintingCollection.items;
}

export async function getFeaturedArtworks () {
  const data = await getAllArtworks();
  const featuredArtWork = data.filter((artwork) => artwork.slideshow === true);
  return featuredArtWork;
}

export async function getNonFeaturedArtworks () {
  const data = await getAllArtworks();
  return data.filter((artwork) => artwork.slideshow !== true);
}

export async function getDigitalArtworks () {
  const data = await getNonFeaturedArtworks();
  const digitalArt = data.filter((artwork) => artwork.medium === 'digital');
  return digitalArt;
}

export async function getWaterColorArtworks () {
  const data = await getNonFeaturedArtworks();
  const watercolorArt = data.filter((artwork) => artwork.medium === 'watercolor' || artwork.medium === 'gouache');
  return watercolorArt;
}

export async function getOilArtworks () {
  const data = await getNonFeaturedArtworks();
  const oilArt = data.filter((artwork) => artwork.medium === 'oil');
  return oilArt;
}

export async function getGouacheArtworks () {
  const data = await getNonFeaturedArtworks();
  const gouacheArt = data.filter((artwork) => artwork.medium === 'gouache');
  return gouacheArt;
}