const apiDomain = process.env.API_DOMAIN || null;

async function fetchPosts() {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/posts`);
    if (!res.ok) {
      throw new Error("Failed to fetch data!");
    }

    return res.json();
  } catch (error: any) {
    console.log(error);
    return [];
  }
}

async function fetchSinglePost(id: any) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/posts/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export { fetchPosts, fetchSinglePost };
