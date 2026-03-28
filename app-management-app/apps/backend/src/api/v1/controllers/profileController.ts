import { Request, Response, NextFunction } from "express";
import { successResponse, errorResponse } from "../models/responseModel";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import * as profileService from "../services/profileService";
import type { FrontendProfile } from "@shared/types/frontend-profile";

export const getProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id;
    const user = await profileService.getProfileById(id) as FrontendProfile;

    if (!user) {
      res.status(HTTP_STATUS.NOT_FOUND).json(errorResponse("User profile not found."));
      return;
    }

    res.status(HTTP_STATUS.OK).json(successResponse(user, "User profile retrieved successfully."));

  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id;
    const { name, email, phone, address } = req.body;

    if (!name || !email || !phone || !address) {
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse("All fields are required."));
      return;
    }

    const updatedUser = await profileService.updateProfile(id, {
      name,
      email,
      phone,
      address
    }) as FrontendProfile;

    res.status(HTTP_STATUS.OK).json(successResponse(updatedUser, "User profile updated successfully."));

  } catch (error) {
    next(error);
  }
};

export const getAllProfiles = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await profileService.getAllProfiles() as FrontendProfile[];

    res.status(HTTP_STATUS.OK).json(successResponse(users, "User profiles retrieved successfully."));

  } catch (error) {
    next(error);
  }
};
