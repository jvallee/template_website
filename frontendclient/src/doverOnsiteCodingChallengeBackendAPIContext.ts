/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { DoverOnsiteCodingChallengeBackendAPIOptionalParams } from "./models";

const packageName = "api";
const packageVersion = "0.1.0";

export class DoverOnsiteCodingChallengeBackendAPIContext extends coreHttp.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the DoverOnsiteCodingChallengeBackendAPIContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    options?: DoverOnsiteCodingChallengeBackendAPIOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "/api";

    // Assigning values to Constant parameters
    this.$host = options.$host || "/api";
  }
}
