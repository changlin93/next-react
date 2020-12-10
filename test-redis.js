const Redis = require("ioredis");

const redis = new Redis({
  port: 6789,
  host: "119.3.48.150",
  password: "lin@redis",
});

(async () => {
  const keys = await redis.keys("*");
  console.log(keys);

  await redis.set("c", 123);
  console.log(await redis.get("c"));

  await redis.setex("d", 10, 31123);
  console.log(await redis.get("d"));
})();
